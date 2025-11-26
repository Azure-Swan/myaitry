import React, { useMemo } from 'react';

const FloatingElements: React.FC = () => {
  // Generate random particles for "data flow" effect
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 80 + 10}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      size: Math.random() > 0.7 ? 'w-1.5 h-1.5' : 'w-1 h-1',
      opacity: Math.random() * 0.5 + 0.3
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 perspective-1000">
      
      {/* 1. Data Particles (Square dots - Blue/Cyan) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute bg-brand-cyan rounded-[1px] ${p.size} animate-pulse shadow-sm shadow-blue-300`}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            opacity: p.opacity,
            animation: `float ${p.duration} ease-in-out infinite alternate`
          }}
        />
      ))}

      {/* --- IMAGE ELEMENTS (Illustrative SVGs) --- */}

      {/* 1. Main Cloud "Image" - Top Right */}
      <div className="absolute top-[12%] right-[10%] w-48 h-48 md:w-64 md:h-64 animate-float">
         {/* 3D-style Cloud Illustration */}
         <svg viewBox="0 0 200 150" className="w-full h-full drop-shadow-2xl">
            <defs>
               <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e0f2fe" />
               </linearGradient>
               <filter id="glow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                     <feMergeNode in="coloredBlur"/>
                     <feMergeNode in="SourceGraphic"/>
                  </feMerge>
               </filter>
            </defs>
            <path d="M140 100 C 165 100, 180 85, 180 65 C 180 40, 155 25, 135 30 C 125 10, 95 5, 75 25 C 65 20, 45 20, 35 35 C 15 35, 5 55, 15 80 C 20 95, 35 100, 45 100 Z" 
               fill="url(#cloudGrad)" filter="url(#glow)" stroke="#bae6fd" strokeWidth="2" opacity="0.95" />
            
            {/* Cloud Shine */}
            <path d="M75 35 Q 95 15, 125 40" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
         </svg>
         {/* Glow behind cloud */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 blur-3xl rounded-full"></div>
      </div>

      {/* 2. Server Stack "Image" - Bottom Right */}
      <div className="absolute bottom-[20%] right-[20%] w-28 h-36 animate-float-delayed hidden md:block">
         <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-xl">
             <defs>
               <linearGradient id="serverBody" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f1f5f9" />
                  <stop offset="100%" stopColor="#cbd5e1" />
               </linearGradient>
               <linearGradient id="serverSide" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
               </linearGradient>
             </defs>
             {/* Server Unit 1 */}
             <path d="M10 10 L90 10 L90 30 L10 30 Z" fill="url(#serverBody)" stroke="#94a3b8" strokeWidth="1" />
             <path d="M90 10 L100 20 L100 40 L90 30 Z" fill="url(#serverSide)" />
             <circle cx="20" cy="20" r="2" fill="#00d2ff" className="animate-pulse" />
             <circle cx="30" cy="20" r="2" fill="#00d2ff" className="animate-pulse" style={{animationDelay: '0.2s'}} />
             
             {/* Server Unit 2 */}
             <path d="M10 40 L90 40 L90 60 L10 60 Z" fill="url(#serverBody)" stroke="#94a3b8" strokeWidth="1" />
             <path d="M90 40 L100 50 L100 70 L90 60 Z" fill="url(#serverSide)" />
             <circle cx="20" cy="50" r="2" fill="#22c55e" className="animate-pulse" />
             
             {/* Server Unit 3 */}
             <path d="M10 70 L90 70 L90 90 L10 90 Z" fill="url(#serverBody)" stroke="#94a3b8" strokeWidth="1" />
             <path d="M90 70 L100 80 L100 100 L90 90 Z" fill="url(#serverSide)" />
             <circle cx="20" cy="80" r="2" fill="#00d2ff" className="animate-pulse" />
             <circle cx="30" cy="80" r="2" fill="#00d2ff" className="animate-pulse" style={{animationDelay: '0.4s'}} />

             {/* Base */}
             <path d="M5 100 L95 100 L95 110 L5 110 Z" fill="#475569" />
         </svg>
      </div>

      {/* 3. Shield "Image" (Security) - Bottom Left */}
      <div className="absolute bottom-[25%] left-[8%] w-24 h-24 animate-float" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
             <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#60a5fa" />
                   <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
             </defs>
             <path d="M50 10 L85 25 V 50 C 85 75, 50 95, 50 95 C 50 95, 15 75, 15 50 V 25 Z" 
                fill="url(#shieldGrad)" opacity="0.9" stroke="white" strokeWidth="2" />
             {/* Checkmark */}
             <path d="M35 50 L45 60 L65 40" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
      </div>

      {/* 4. Floating Chip "Image" - Top Left */}
      <div className="absolute top-[18%] left-[12%] w-20 h-20 animate-spin-reverse-slow hidden md:block">
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="25" y="25" width="50" height="50" rx="5" fill="#1e293b" stroke="#00d2ff" strokeWidth="2" />
            {/* Pins */}
            <path d="M25 35 H 15 M 25 45 H 15 M 25 55 H 15 M 25 65 H 15" stroke="#94a3b8" strokeWidth="2" />
            <path d="M75 35 H 85 M 75 45 H 85 M 75 55 H 85 M 75 65 H 85" stroke="#94a3b8" strokeWidth="2" />
            <path d="M35 25 V 15 M 45 25 V 15 M 55 25 V 15 M 65 25 V 15" stroke="#94a3b8" strokeWidth="2" />
            <path d="M35 75 V 85 M 45 75 V 85 M 55 75 V 85 M 65 75 V 85" stroke="#94a3b8" strokeWidth="2" />
            <rect x="40" y="40" width="20" height="20" fill="#00d2ff" opacity="0.8" />
         </svg>
      </div>

      {/* 5. Isometric Cube (Abstract Tech) - Far Right */}
      <div className="absolute top-[45%] right-[2%] w-16 h-16 animate-wiggle opacity-60">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand-cyan fill-none stroke-2">
           <path d="M10 30 L50 10 L90 30 L90 70 L50 90 L10 70 Z" />
           <path d="M10 30 L50 50 L90 30" />
           <path d="M50 90 L50 50" />
        </svg>
      </div>
      
      {/* 6. Background Globe Wireframe - Center Left */}
      <div className="absolute top-[30%] left-[25%] w-32 h-32 opacity-10 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-brand-dark fill-none stroke-1">
           <circle cx="50" cy="50" r="48" />
           <ellipse cx="50" cy="50" rx="20" ry="48" />
           <ellipse cx="50" cy="50" rx="48" ry="20" />
        </svg>
      </div>

      {/* Large blurred orbs for color depth (Cool Blue Ambient Light) */}
      <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-cyan-100/40 rounded-full blur-[90px] mix-blend-multiply"></div>
      
    </div>
  );
};

export default FloatingElements;