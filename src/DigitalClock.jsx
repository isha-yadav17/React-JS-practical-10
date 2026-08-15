import React, { useEffect, useState } from "react";

function DigitalClock() {
const [time, setTime] = useState(new Date());

useEffect(() => {
const timer = setInterval(() => {
setTime(new Date());
}, 1000);

// Cleanup the timer when the component is removed
return () => {
clearInterval(timer);
};
}, []);

return (

<div className="min-h-screen flex items-center justify-center bg-[#020202] p-6 relative overflow-hidden">

{/* Futuristic Background */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.10),transparent_40%)]"></div>

<div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>


{/* Floating Glow Orbs */}

<div className="absolute top-16 left-20 h-3 w-3 rounded-full bg-red-400 shadow-[0_0_25px_8px_rgba(239,68,68,0.5)] animate-pulse"></div>

<div className="absolute bottom-24 right-24 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_25px_8px_rgba(34,197,94,0.5)] animate-pulse"></div>

<div className="absolute top-1/3 right-20 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_20px_6px_rgba(249,115,22,0.5)] animate-ping"></div>


<div className="relative w-full max-w-2xl">

{/* Outer Futuristic Frame */}

<div className="absolute -inset-[3px] rounded-[38px] bg-gradient-to-r from-red-600 via-orange-500 to-emerald-500 opacity-80 blur-sm"></div>


{/* Main Panel */}

<div className="relative rounded-[36px] border border-white/10 bg-[#080808]/95 p-10 shadow-[0_0_100px_rgba(249,115,22,0.18)] backdrop-blur-xl">


{/* Top Status Bar */}

<div className="mb-8 flex items-center justify-between">

<div className="flex items-center gap-3">

<span className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)] animate-pulse"></span>

<span className="text-xs font-black uppercase tracking-[4px] text-red-300">
LIVE
</span>

</div>

<div className="flex gap-2">

<span className="h-2 w-2 rounded-full bg-orange-400"></span>

<span className="h-2 w-2 rounded-full bg-emerald-400"></span>

<span className="h-2 w-2 rounded-full bg-red-400"></span>

</div>

</div>


{/* Heading */}

<h1 className="mb-3 text-center text-5xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-emerald-400 drop-shadow-[0_0_25px_rgba(249,115,22,0.55)]">

Digital Clock

</h1>

<p className="mb-10 text-center text-xs font-bold uppercase tracking-[5px] text-white/40">
REAL TIME • SYSTEM CLOCK
</p>


{/* Clock Frame */}

<div className="relative rounded-[30px] border border-orange-500/30 bg-black p-3 shadow-[0_0_50px_rgba(249,115,22,0.15)]">

{/* Inner Screen */}

<div className="relative overflow-hidden rounded-[22px] border border-red-500/20 bg-gradient-to-br from-[#120404] via-[#050505] to-[#031008] px-6 py-12 shadow-[inset_0_0_50px_rgba(239,68,68,0.12)]">


{/* Scan Lines */}

<div className="pointer-events-none absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(255,255,255,0.08)_5px)]"></div>


{/* Corner Decorations */}

<div className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-red-500"></div>

<div className="absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-orange-500"></div>

<div className="absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-emerald-500"></div>

<div className="absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-red-500"></div>


<p className="relative text-center text-5xl font-black tracking-[8px] text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-emerald-400 drop-shadow-[0_0_20px_rgba(249,115,22,0.8)] sm:text-6xl">

{time.toLocaleTimeString()}

</p>

</div>

</div>


{/* Bottom Info */}

<div className="mt-8 flex items-center justify-center gap-3">

<div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-500/50"></div>

<div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2">

<span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.9)] animate-pulse"></span>

<span className="text-xs font-bold uppercase tracking-[2px] text-emerald-300">
Live Updating
</span>

</div>

<div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500/50"></div>

</div>


<p className="mt-6 text-center text-xs font-medium tracking-wide text-white/30">
The clock updates every second.
</p>

</div>

</div>
</div>
);

}

export default DigitalClock;