import React from 'react';
import WaveBackground from './WaveBackground';
import FloatingElements from './FloatingElements';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-gradient-to-br from-[#F5FAFF] via-[#E6F4FF] to-[#D6EFFF]">
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        <WaveBackground />
      </div>

      {/* Floating Decorative Elements (Images/Icons) */}
      <FloatingElements />

      {/* Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center md:items-start pt-10">
        
        {/* Main Title */}
        <div className="text-center md:text-left mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#0f172a] tracking-tight leading-[1.1]">
            畅享 <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-brand-cyan drop-shadow-sm">AI</span> 算力
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#0f172a] tracking-tight leading-[1.1] mt-2 flex items-center justify-center md:justify-start">
            <span className="hidden md:inline-block w-3 h-3 rounded-full bg-brand-cyan mx-5 mt-4 animate-pulse"></span>
            云启新增长
            </h1>
        </div>

        {/* Subtitle */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-base md:text-xl text-gray-600 font-medium max-w-3xl leading-relaxed text-center md:text-left bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-blue-100 shadow-sm">
            <span className="text-brand-blue font-bold">4核4G服务器</span> 新客 <span className="text-brand-dark font-bold">38元/年</span> 起，AI 算力 <span className="text-red-500 font-bold">0.8折</span> 起，百万大模型 tokens 免费体验
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
             <button className="px-8 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-lg font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all active:scale-95">
                立即抢购
             </button>
             <button className="px-8 py-3 bg-white text-brand-blue border-2 border-brand-blue/20 text-lg font-bold rounded-full shadow-sm hover:bg-blue-50 hover:border-brand-blue transition-all active:scale-95">
                查看会场
             </button>
        </div>

        <div className="h-12"></div>

      </div>

      {/* Fade overlay at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5FAFF] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default HeroSection;