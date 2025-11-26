import React from 'react';
import WaveBackground from './WaveBackground';
import FloatingElements from './FloatingElements';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-gradient-to-br from-[#fffdf5] via-[#fffbf0] to-[#fff0e0]">
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        <WaveBackground />
      </div>

      {/* Floating Decorative Elements */}
      <FloatingElements />

      {/* Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center md:items-start pt-10">
        
        {/* Badge - 11.11 */}
        <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#ff4d4d] to-[#ff8c00] text-white px-6 py-1.5 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg shadow-xl shadow-orange-500/30 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <span className="text-xl md:text-3xl font-black italic tracking-wider drop-shadow-sm">11.11</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center md:text-left mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#2a2a2a] tracking-tight leading-[1.1]">
            畅享 <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-orange to-brand-gold drop-shadow-sm">AI</span> 算力
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#2a2a2a] tracking-tight leading-[1.1] mt-2 flex items-center justify-center md:justify-start">
            <span className="hidden md:inline-block w-3 h-3 rounded-full bg-brand-orange mx-5 mt-4 animate-pulse"></span>
            云启新增长
            </h1>
        </div>

        {/* Subtitle */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-base md:text-xl text-gray-600 font-medium max-w-3xl leading-relaxed text-center md:text-left bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/60 shadow-sm">
            <span className="text-brand-orange font-bold">4核4G服务器</span> 新客 <span className="text-red-500 font-bold">38元/年</span> 起，AI 算力 <span className="text-red-500 font-bold">0.8折</span> 起，百万大模型 tokens 免费体验
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
             <button className="px-8 py-3 bg-gradient-to-r from-brand-orange to-brand-gold text-white text-lg font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all active:scale-95">
                立即抢购
             </button>
             <button className="px-8 py-3 bg-white text-brand-orange border-2 border-brand-orange/20 text-lg font-bold rounded-full shadow-sm hover:bg-orange-50 hover:border-brand-orange transition-all active:scale-95">
                查看会场
             </button>
        </div>

        <div className="h-12"></div>

      </div>

      {/* Glass overlay at the bottom for smooth transition to content */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fffdf5] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default HeroSection;