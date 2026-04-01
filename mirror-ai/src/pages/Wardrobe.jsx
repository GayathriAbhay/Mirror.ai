import { useState, useEffect } from "react";
import GlassCard from "../components/GlassCard";

export default function Wardrobe({ mood = "neutral" }) {
  const [outfits, setOutfits] = useState([]);
  const [loading, setLoading] = useState(false);

  // Map moods to fashion search terms
  const styleMap = {
    happy: "vibrant colorful summer fashion",
    sad: "cozy oversized aesthetic loungewear",
    angry: "dark techwear edgy fashion",
    surprised: "bold avant-garde runway style",
    neutral: "minimalist earth tone aesthetic clothing"
  };

  useEffect(() => {
    const fetchStyles = async () => {
      setLoading(true);
      const query = styleMap[mood] || styleMap.neutral;
      const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=6&orientation=portrait&client_id=${accessKey}`
        );
        const data = await response.json();
        setOutfits(data.results);
      } catch (error) {
        console.error("Failed to fetch wardrobe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStyles();
  }, [mood]); // Reloads every time the mood changes

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">AI Wardrobe</h2>
      <p className="text-slate-500 mb-8 capitalize">Styles curated for your {mood} mood</p>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outfits.map((item) => (
            <GlassCard key={item.id} className="overflow-hidden group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <img 
                  src={item.urls.regular} 
                  alt={item.alt_description}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                  {mood} collection
                </p>
                <h4 className="text-slate-800 font-medium truncate mt-1">
                  {item.description || "Style Selection"}
                </h4>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
