import { useState } from "react";
import CameraMoodDetector from "../components/CameraMoodDetector";
import GlassCard from "../components/GlassCard";

/**
 * Configuration for different moods.
 * This maps the raw AI detection to specific UI colors and recommendations.
 */
const moodData = {
  happy: {
    color: "from-yellow-200 to-orange-200",
    accent: "text-orange-600",
    message: "Your energy is radiant today!",
    suggestion: "Bright Casual - Perfect for a walk or a coffee catch-up.",
    setting: "Warm Sunshine (80% Brightness)"
  },
  sad: {
    color: "from-blue-200 to-indigo-200",
    accent: "text-indigo-600",
    message: "It's okay to take it slow today.",
    suggestion: "Comfort Wear - Soft fabrics and cozy layers.",
    setting: "Calm Blue (40% Brightness)"
  },
  angry: {
    color: "from-red-200 to-rose-200",
    accent: "text-rose-600",
    message: "Take a deep breath. Let's find some balance.",
    suggestion: "Athleisure - Movement might help clear your mind.",
    setting: "Soft Lavender (50% Brightness)"
  },
  surprised: {
    color: "from-purple-200 to-pink-200",
    accent: "text-pink-600",
    message: "Expect the unexpected!",
    suggestion: "Bold Statement - Something as unique as your day.",
    setting: "Dynamic White (90% Brightness)"
  },
  neutral: {
    color: "from-gray-100 to-slate-200",
    accent: "text-slate-600",
    message: "A clean slate for a fresh start.",
    suggestion: "Minimalist Set - Clean lines and neutral tones.",
    setting: "Natural Daylight (70% Brightness)"
  },
  default: {
    color: "from-white to-blue-50",
    accent: "text-blue-500",
    message: "Waiting to see your reflection...",
    suggestion: "Select an outfit to begin.",
    setting: "Standard Mode"
  }
};

export default function Home() {
  const [mood, setMood] = useState("default");

  // Get configuration for current mood or fallback to default
  const activeMood = moodData[mood] || moodData.default;

  return (
    <div className={`min-h-screen transition-all duration-1000 bg-gradient-to-br ${activeMood.color} p-6 md:p-12`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-sm tracking-[0.3em] uppercase font-light text-slate-500 mb-2">Mirror.AI System</h1>
          <h2 className="text-4xl font-semibold text-slate-800">Today's Reflection</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Camera Feed */}
          <div className="lg:col-span-1">
            <GlassCard className="p-4 flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden border-4 border-white/50 shadow-inner">
                <CameraMoodDetector onMoodDetected={setMood} />
              </div>
              <div className="mt-6 text-center">
                <span className="px-4 py-1 bg-white/50 rounded-full text-xs font-medium uppercase tracking-wider">
                  Live Vision Active
                </span>
                <p className="mt-4 text-slate-600 italic">"Focus on the mirror to sync your mood."</p>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: AI Insights & Controls */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Main Mood Insight */}
            <GlassCard className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Detected Emotion</p>
                  <h3 className={`text-5xl font-bold capitalize ${activeMood.accent}`}>
                    {mood === "default" ? "Scanning..." : mood}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Mirror Status</p>
                  <p className="font-medium text-green-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Connected
                  </p>
                </div>
              </div>
              <p className="text-xl text-slate-700 leading-relaxed mb-4">
                {activeMood.message}
              </p>
            </GlassCard>

            {/* Recommendations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">AI Suggested Outfit</p>
                <p className="text-lg text-slate-800 font-medium">{activeMood.suggestion}</p>
                <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">View in Wardrobe →</button>
              </GlassCard>

              <GlassCard className="p-6">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">Mirror Environment</p>
                <p className="text-lg text-slate-800 font-medium">{activeMood.setting}</p>
                <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">Adjust Lighting →</button>
              </GlassCard>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}