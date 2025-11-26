import React from 'react';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fffdf5] overflow-x-hidden">
      {/* Navigation placeholder to make it look like a real page */}
      <nav className="h-16 bg-white/80 backdrop-blur-md shadow-sm flex items-center px-8 border-b border-orange-100 relative z-50">
        <div className="text-xl font-bold text-gray-800 flex items-center gap-2">
           {/* Logo Icon */}
           <div className="w-8 h-8 bg-gradient-to-br from-brand-orange to-brand-gold rounded-md flex items-center justify-center text-white font-bold text-xs">
             TC
           </div>
           <span>Tencent Cloud</span>
        </div>
        <div className="ml-12 hidden md:flex space-x-8 text-gray-600 text-sm font-medium">
          <span className="cursor-pointer hover:text-brand-orange transition-colors">Products</span>
          <span className="cursor-pointer hover:text-brand-orange transition-colors">Solutions</span>
          <span className="cursor-pointer hover:text-brand-orange transition-colors">Pricing</span>
          <span className="cursor-pointer text-brand-orange font-bold relative">
            Double 11 Event
            <span className="absolute -bottom-[21px] left-0 w-full h-[2px] bg-brand-orange"></span>
          </span>
        </div>
      </nav>

      <main>
        <HeroSection />
        
        {/* Content placeholder below banner */}
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Hot Sale Products</h2>
                <p className="text-gray-500 mt-2">Unbeatable Double 11 discounts on high-performance cloud services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-64 bg-white rounded-xl shadow-sm border border-orange-100/50 p-6 flex flex-col justify-between hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
                        <div className="h-12 w-12 bg-orange-50 rounded-lg mb-4 flex items-center justify-center text-brand-orange">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                           </svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-100">11.11 OFFER</span>
                            </div>
                            <h3 className="font-bold text-lg mb-1 group-hover:text-brand-orange transition-colors">Standard Cloud Server</h3>
                            <p className="text-gray-400 text-sm">Starting from <span className="text-red-500 font-bold text-lg">¥38</span>/year</p>
                        </div>
                        <button className="w-full py-2 bg-gradient-to-r from-brand-orange to-brand-gold text-white font-medium rounded-lg mt-4 shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 transform active:scale-[0.98] transition-all">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
};

export default App;