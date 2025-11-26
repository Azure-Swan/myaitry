import React, { useRef, useEffect } from 'react';

const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Yellow / Gold / Orange Wave Parameters
    const waves = [
      {
        // Light Yellow background wave
        gradientStart: 'rgba(255, 215, 0, 0.05)',
        gradientEnd: 'rgba(255, 165, 0, 0.1)',
        speed: 0.002,
        amplitude: 60,
        frequency: 0.001,
        offset: 0,
        yOffset: height * 0.55,
        tilt: 0
      },
      {
        // Bright Orange/Gold wave
        gradientStart: 'rgba(255, 140, 0, 0.15)', // Dark Orange
        gradientEnd: 'rgba(255, 215, 0, 0.0)',   // Gold transparent
        speed: 0.003,
        amplitude: 90,
        frequency: 0.0015,
        offset: 100,
        yOffset: height * 0.6,
        tilt: 50
      },
      {
        // Vivid Yellow/Orange primary wave
        gradientStart: 'rgba(255, 200, 0, 0.2)',
        gradientEnd: 'rgba(255, 100, 0, 0.05)',
        speed: 0.0025,
        amplitude: 110,
        frequency: 0.0008,
        offset: 200,
        yOffset: height * 0.65,
        tilt: -20
      },
      // Bottom filler wave (Red-Orange)
      {
        gradientStart: 'rgba(255, 69, 0, 0.08)',
        gradientEnd: 'rgba(255, 140, 0, 0.2)',
        speed: 0.001,
        amplitude: 140,
        frequency: 0.0005,
        offset: 50,
        yOffset: height * 0.75,
        tilt: 0
      }
    ];

    let time = 0;

    const resize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        // Ensure canvas covers enough height for the banner
        height = canvas.height = Math.max(650, window.innerHeight); 
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      time += 1;

      // Draw grid lines in background for "tech" feel (Warm Tone)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 180, 0, 0.1)'; // Gold grid lines
      ctx.lineWidth = 1;
      
      // Vertical perspective lines
      const centerX = width / 2;
      const bottomY = height;
      const topY = 0;
      
      for(let i = -10; i <= 10; i++) {
        const xStart = centerX + (i * width * 0.05); // Top spacing
        const xEnd = centerX + (i * width * 0.2);   // Bottom spacing (perspective)
        ctx.moveTo(xStart, topY);
        ctx.lineTo(xEnd, bottomY);
      }
      ctx.stroke();


      // Draw Waves
      waves.forEach((wave) => {
        ctx.beginPath();
        
        // Create gradient for this wave
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, wave.gradientStart);
        gradient.addColorStop(1, wave.gradientEnd);
        ctx.fillStyle = gradient;
        
        // Stroke should be a slightly stronger version of the start color
        ctx.strokeStyle = wave.gradientStart.replace('0.05', '0.3').replace('0.1', '0.4').replace('0.2', '0.5'); 
        ctx.lineWidth = 1;

        ctx.moveTo(0, height); // Start bottom left

        // Trace the top of the wave
        for (let x = 0; x <= width; x += 5) {
            // Complex sine wave
            const y = Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude 
                    + Math.sin(x * wave.frequency * 2.5 + time * wave.speed * 1.5) * (wave.amplitude * 0.3);

            // Apply tilt for perspective
            const tiltY = (x / width) * wave.tilt;
            
            ctx.lineTo(x, wave.yOffset + y + tiltY);
        }

        ctx.lineTo(width, height); // To bottom right
        ctx.closePath();
        
        ctx.fill();
        // Optional: stroke the top edge for definition
        // ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block"
      style={{ filter: 'blur(0px)' }}
    />
  );
};

export default WaveBackground;