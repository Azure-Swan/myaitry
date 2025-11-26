import React, { useMemo } from 'react';

const FloatingElements: React.FC = () => {
  // Generate random particles for "data flow" effect
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 80 + 10}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      size: Math.random() > 0.7 ? 'w-2 h-2' : 'w-1.5 h-1.5',
      opacity: Math.random() * 0.5 + 0.3
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 perspective-1000">
      
      {/* 1. Data Particles (Square dots - Gold/Orange) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute bg-orange-400 rounded-[1px] ${p.size} animate-pulse shadow-sm shadow-orange-300`}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            opacity: p.opacity,
            animation: `float ${p.duration} ease-in-out infinite alternate`
          }}
        />
      ))}

      {/* 2. Primary 3D Shape - Right Side (Tetrahedron-ish - Gold/Red Gradient) */}
      <div className="absolute top-[15%] right-[8%] w-40 h-40 md:w-56 md:h-56 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl animate-spin-slow">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" /> {/* Amber 400 */}
                <stop offset="100%" stopColor="#ea580c" /> {/* Orange 600 */}
              </linearGradient>
            </defs>
            <path d="M50 10 L90 40 L50 90 L10 40 Z" fill="url(#goldGrad)" opacity="0.9" />
            <path d="M50 10 L90 40 L50 50 Z" fill="#fcd34d" opacity="0.6" /> {/* Amber 300 */}
            <path d="M10 40 L50 10 L50 50 Z" fill="#fdba74" opacity="0.4" /> {/* Orange 300 */}
        </svg>
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* 3. Secondary Shape - Left Side (Cube/Diamond - Orange/Yellow) */}
      <div className="absolute bottom-[20%] left-[3%] w-20 h-20 md:w-28 md:h-28 animate-float-delayed">
        <div className="relative w-full h-full transform rotate-45">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-lg opacity-80 shadow-lg animate-wiggle border border-white/20"></div>
            <div className="absolute inset-0 border border-white/40 rounded-lg transform scale-110"></div>
        </div>
      </div>

      {/* 4. Background Plus Signs (+ symbols - Warm Colors) */}
      <div className="absolute top-[15%] left-[25%] text-orange-300/40 text-4xl font-bold animate-spin-reverse-slow select-none">+</div>
      <div className="absolute top-[40%] right-[35%] text-yellow-500/30 text-2xl font-bold animate-pulse-slow select-none">+</div>
      <div className="absolute bottom-[10%] left-[45%] text-red-300/20 text-6xl font-bold animate-spin-slow select-none">+</div>

      {/* 5. Shooting Line (Comet - Gold) */}
      <div className="absolute top-[25%] left-0 w-full h-[1px] overflow-hidden">
        <div className="w-[200px] h-full bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent transform translate-x-[-100%] animate-[slideRight_7s_linear_infinite]"></div>
      </div>
       <div className="absolute top-[65%] left-0 w-full h-[1px] overflow-hidden">
        <div className="w-[300px] h-full bg-gradient-to-r from-transparent via-orange-400/40 to-transparent transform translate-x-[-100%] animate-[slideRight_10s_linear_2s_infinite]"></div>
      </div>

      {/* NEW ELEMENTS BELOW */}

      {/* 6. Rotating Dashed Ring - Top Right Center (Technical Feel) */}
      <div className="absolute top-[18%] right-[28%] w-32 h-32 opacity-40 animate-spin-reverse-slow hidden md:block">
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
         </svg>
      </div>

      {/* 7. Floating Capsule/Pill - Bottom Left (Soft Volume) */}
      <div className="absolute bottom-[28%] left-[12%] w-14 h-28 opacity-60 animate-float" style={{ animationDelay: '1.5s', animationDuration: '6s' }}>
          <div className="w-full h-full rounded-full bg-gradient-to-b from-orange-200 to-yellow-100 blur-[2px] transform -rotate-12 border border-white/50 shadow-lg shadow-orange-200/20"></div>
      </div>

      {/* 8. Hexagon Cluster - Top Left (Tech/Data) */}
      <div className="absolute top-[12%] left-[8%] w-28 h-28 opacity-30 animate-pulse-slow hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-500">
           <path d="M30 10 L50 20 L50 40 L30 50 L10 40 L10 20 Z" opacity="0.7" />
           <path d="M65 30 L85 40 L85 60 L65 70 L45 60 L45 40 Z" opacity="0.5" />
           <path d="M30 60 L50 70 L50 90 L30 100 L10 90 L10 70 Z" opacity="0.4" />
        </svg>
      </div>

      {/* 9. Isometric Wireframe Cube - Bottom Right (Structure) */}
      <div className="absolute bottom-[18%] right-[18%] w-24 h-24 opacity-40 animate-float-delayed hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-orange-600 fill-none stroke-[1.5]">
           <path d="M10 30 L50 10 L90 30 L90 70 L50 90 L10 70 Z" />
           <path d="M10 30 L50 50 L90 30" />
           <path d="M50 90 L50 50" />
        </svg>
      </div>

      {/* 10. Neon Squiggle Line - Middle Right (Energy) */}
      <div className="absolute top-[48%] right-[4%] w-40 h-16 opacity-50 animate-wiggle">
         <svg viewBox="0 0 120 40" className="w-full h-full stroke-red-400 fill-none stroke-[3]" style={{ filter: 'drop-shadow(0px 0px 4px rgba(255,100,0,0.3))'}}>
            <path d="M10 20 C 30 5, 50 35, 70 20 S 110 5, 110 20" strokeLinecap="round" />
         </svg>
      </div>

      {/* Large blurred orbs for color depth (Warm Ambient Light) */}
      <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-orange-100/50 rounded-full blur-[90px] mix-blend-multiply"></div>
      
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;