import React from 'react';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5FAFF] overflow-x-hidden">
      {/* Navigation placeholder */}
      <nav className="h-16 bg-white/80 backdrop-blur-md shadow-sm flex items-center px-8 border-b border-blue-50 relative z-50">
        <div className="text-xl font-bold text-gray-800 flex items-center gap-2">
           {/* Logo Icon */}
           <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-200">
             TC
           </div>
           <span>Tencent Cloud</span>
        </div>
        <div className="ml-12 hidden md:flex space-x-8 text-gray-600 text-sm font-medium">
          <span className="cursor-pointer hover:text-brand-blue transition-colors">Products</span>
          <span className="cursor-pointer hover:text-brand-blue transition-colors">Solutions</span>
          <span className="cursor-pointer hover:text-brand-blue transition-colors">Pricing</span>
          <span className="cursor-pointer text-brand-blue font-bold relative">
            Special Events
            <span className="absolute -bottom-[21px] left-0 w-full h-[2px] bg-brand-blue"></span>
          </span>
        </div>
      </nav>

      <main>
        <HeroSection />
        
        {/* Content placeholder below banner */}
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Hot Sale Products</h2>
                <p className="text-gray-500 mt-2">Unbeatable discounts on high-performance cloud services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-64 bg-white rounded-xl shadow-sm border border-blue-50 p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-100 hover:border-brand-blue/30 transition-all duration-300 group">
                        <div className="h-12 w-12 bg-blue-50 rounded-lg mb-4 flex items-center justify-center text-brand-blue">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                           </svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-100">LIMITED OFFER</span>
                            </div>
                            <h3 className="font-bold text-lg mb-1 group-hover:text-brand-blue transition-colors">Standard Cloud Server</h3>
                            <p className="text-gray-400 text-sm">Starting from <span className="text-brand-blue font-bold text-lg">¥38</span>/year</p>
                        </div>
                        <button className="w-full py-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-medium rounded-lg mt-4 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transform active:scale-[0.98] transition-all">
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