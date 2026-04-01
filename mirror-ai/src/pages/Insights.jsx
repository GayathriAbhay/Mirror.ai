import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import GlassCard from "../components/GlassCard";

// Mock data for the Bar Chart
const moodHistory = [
  { day: "Mon", dominant: "Happy", intensity: 85 },
  { day: "Tue", dominant: "Neutral", intensity: 60 },
  { day: "Wed", dominant: "Sad", intensity: 40 },
  { day: "Thu", dominant: "Happy", intensity: 90 },
  { day: "Fri", dominant: "Surprised", intensity: 75 },
  { day: "Sat", dominant: "Neutral", intensity: 55 },
  { day: "Sun", dominant: "Happy", intensity: 95 },
];

// Mock data for the Radar Chart
const styleDNA = [
  { subject: 'Minimalist', A: 85, fullMark: 100 },
  { subject: 'Vibrant', A: 60, fullMark: 100 },
  { subject: 'Comfort', A: 90, fullMark: 100 },
  { subject: 'Professional', A: 40, fullMark: 100 },
  { subject: 'Bold', A: 55, fullMark: 100 },
];

export default function Insights() {
  return (
    <div className="min-h-screen p-6 md:p-12 animate-fade-in bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-sm tracking-[0.3em] uppercase font-light text-slate-500 mb-2">Mirror.AI Analytics</h1>
          <h2 className="text-4xl font-semibold text-slate-800">Your Reflection Journey</h2>
        </header>

        <div className="space-y-8">
          
          {/* Row 1: Weekly Mood Trend (Full Width) */}
          <GlassCard className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-medium text-slate-800">Weekly Emotional Flow</h3>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                7-Day Analysis
              </span>
            </div>
            <div className="flex items-end justify-between h-48 gap-2">
              {moodHistory.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1 group">
                  <div 
                    className="w-full max-w-[40px] bg-indigo-400/30 border border-indigo-400/20 rounded-t-lg transition-all duration-500 hover:bg-indigo-500 hover:scale-105 relative"
                    style={{ height: `${item.intensity}%` }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-indigo-600 transition-opacity">
                      {item.intensity}%
                    </span>
                  </div>
                  <span className="mt-4 text-xs font-semibold text-slate-500">{item.day}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Row 2: AI Observations & Aesthetic DNA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left side: AI Observations & Pulse */}
            <div className="space-y-6 flex flex-col">
              <GlassCard className="p-8 border-l-4 border-indigo-500 bg-gradient-to-br from-white/50 to-indigo-50/30 flex-grow">
                <div className="flex items-center gap-3 mb-4 text-indigo-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
                  <h3 className="text-xs font-bold uppercase tracking-widest">AI Observation</h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed italic">
                  "We've detected a high correlation between your **'Happy'** peaks and **Vibrant** wardrobe selections. Your morning routine is most efficient when the mirror is set to **'Natural Daylight'**."
                </p>
                <button className="mt-6 text-xs font-bold text-indigo-600 hover:underline">
                  Optimize Schedule →
                </button>
              </GlassCard>

              <GlassCard className="p-6 bg-slate-800 text-white">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Style Pulse</h3>
                <p className="text-2xl font-light">Versatility: <span className="font-bold text-green-400">High</span></p>
                <div className="mt-4 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 w-[78%]"></div>
                </div>
              </GlassCard>
            </div>

            {/* Right side: Radar Chart */}
            <GlassCard className="p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800">Aesthetic DNA</h3>
                <p className="text-sm text-slate-500">Mapping style preference vs. emotional state</p>
              </div>
              <div className="flex-grow w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={styleDNA}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} 
                    />
                    <Radar
                      name="User Profile"
                      dataKey="A"
                      stroke="#6366f1"
                      fill="#6366f1"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </div>

          {/* Row 3: Bottom Stat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Top Mood", value: "Happy", detail: "4/7 Days", color: "text-yellow-600" },
              { label: "Confidence", value: "+12%", detail: "Vs last week", color: "text-blue-600" },
              { label: "Lighting Pref", value: "Warm", detail: "80% Usage", color: "text-orange-600" },
              { label: "Color Palette", value: "Earth", detail: "Top Selection", color: "text-emerald-600" },
            ].map((stat, i) => (
              <GlassCard key={i} className="p-6 text-center hover:scale-105 transition-transform">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{stat.label}</p>
                <h4 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h4>
                <p className="text-xs text-slate-400 mt-1">{stat.detail}</p>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}