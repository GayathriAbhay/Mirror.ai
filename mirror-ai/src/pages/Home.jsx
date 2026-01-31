import CameraMoodDetector from "../components/CameraMoodDetector";
import { useState, useEffect } from "react";
import GlassCard from "../components/GlassCard";

const moods = ["Calm", "Happy", "Stressed", "Tired"];



const moodColors = {
  Calm: "bg-calm/40",
  Happy: "bg-happy/40",
  Stressed: "bg-stressed/40",
  Tired: "bg-tired/40",
};

export default function Home() {
    const [mood, setMood] = useState("Detecting...");


    useEffect(() => {
        <CameraMoodDetector onMoodDetected={setMood} />
    }, []); 

    function suggestOutfit(mood) {
      if (mood === "Calm") return "Soft neutral layers";
      if (mood === "Happy") return "Bright casual wear";
      if (mood === "Stressed") return "Comfort hoodie & joggers";
      if (mood === "Tired") return "Loose cozy outfit";
    }

    function mirrorMessage(mood) {
      if (mood === "Calm") return "Move gently today.";
      if (mood === "Happy") return "Carry that energy forward!";
      if (mood === "Stressed") return "Breathe. You’re doing fine.";
      if (mood === "Tired") return "Go easy on yourself today.";
    }


  return (
    <div className="p-10 grid gap-8">
      <h1 className="text-3xl font-semibold">Today’s Reflection</h1>
      
      {/* Mood */}
      <GlassCard>
        <div className={`p-4 rounded-xl ${moodColors[mood]}`}>
            <h2 className="text-lg font-medium">Detected Mood</h2>
            <p className="text-3xl mt-2">{mood}</p>
        </div>
      </GlassCard>

      {/* Outfit */}
      <GlassCard>
        <h2 className="text-lg font-medium">Suggested Outfit</h2>
        <p className="text-xl mt-2">{suggestOutfit(mood)}</p>
      </GlassCard>

      {/* Message */}
      <GlassCard>
        <h2 className="text-lg font-medium">Mirror Message</h2>
        <p className="text-xl mt-2">{mirrorMessage(mood)}</p>
      </GlassCard>
    </div>
  );
}


