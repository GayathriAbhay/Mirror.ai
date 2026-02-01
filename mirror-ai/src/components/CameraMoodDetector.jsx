import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

export default function CameraMoodDetector({ onMoodDetected }) {
  const videoRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    startVideo();
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
        videoRef.current.srcObject = stream;
        })
        .catch(err => {
        console.error("Error accessing camera:", err);
        });
};

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    setLoading(false);
  };

  const detectMood = async () => {
    // Ensure the video is ready and models are loaded
    if (videoRef.current && videoRef.current.readyState === 4 && !loading) {
      const detections = await faceapi
        .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections) {
        const expressions = detections.expressions;
        // Get the mood with the highest confidence score
        const mood = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b
        );
        onMoodDetected(mood);
      }
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="300"
        height="200"
        onPlay={() => setInterval(detectMood, 2000)}
      />
      {loading && <p>Loading AI...</p>}
    </div>
  );
}
