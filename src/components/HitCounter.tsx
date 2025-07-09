import { useEffect, useState } from "react";

const HitCounter = () => {
 const [hits, setHits] = useState(5);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('georetro-hit-count');
      const count = stored ? parseInt(stored) + 1 : 1;
      setHits(count);
      localStorage.setItem('georetro-hit-count', count.toString());
      
    }
  }, []);


  return (
    <div className="mt-6 flex flex-col items-center font-retro text-neon text-sm border-2 border-neon px-4 py-2">
      <p>🔥 You are visitor number 🔥</p>
      <p className="text-2xl mt-1 font-bold tracking-widest">{hits}</p>
    </div>
  );
}

export default HitCounter;