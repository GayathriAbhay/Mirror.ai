
import { useState, useEffect } from "react";
import GlassCard from "../components/GlassCard";

const moods = ["Calm", "Happy", "Stressed", "Tired"];

export default function Home() {
  return (
    <div className="p-10 grid gap-8">
      <h1 className="text-3xl font-semibold">Today’s Reflection</h1>
      
      {/* Mood */}
      <GlassCard>
        Mood Section
      </GlassCard>

      {/* Outfit */}
      <GlassCard>
        Outfit Section
      </GlassCard>

      {/* Message */}
      <GlassCard>
        Message Section
      </GlassCard>
    </div>
  );
}
