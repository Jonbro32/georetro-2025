import react, { useState } from 'react';
import BsButton from '../components/Bsbutton';
import HitCounter from '../components/HitCounter';

export default function Home () {
    
    const [alertvis, setAlert] = useState(false);
    return (
<div className="min-h-screen bg-black text-neon font-retro flex flex-col items-center justify-center gap-12 p-8">
  <div className="w-full overflow-hidden border-b-2 border-neon pb-4">
    <div className="whitespace-nowrap animate-marquee text-3xl uppercase tracking-widest">
      ✨ Welcome to My Glorious Website ✨ Welcome to My Glorious Website ✨
    </div>
  </div>

  <img
    src="/sparkles.gif"
    alt="sparkles"
    className="w-40 h-40 animate-pulse border-4 border-neon"
  />

  <div className="border-4 border-neon p-6 bg-black text-center">
    <h1 className="text-5xl font-bold mb-2">🚧 UNDER CONSTRUCTION 🚧</h1>
    <p className="italic text-sm">Check back soon for more MIDI horror</p>
    <h2 className="text-2xl mt-4 blink uppercase">🔥 Best Viewed in Netscape Navigator 🔥</h2>
    <button className="mt-6 px-6 py-2 bg-neon text-black font-bold border-2 border-neon hover:invert transition-all duration-300">
      📖 Sign My Guestbook
    </button>
    <BsButton color="danger" text='Test Button' onClick={() => setAlert(true)}/>
    <HitCounter/>

  </div>
</div>
    );
}