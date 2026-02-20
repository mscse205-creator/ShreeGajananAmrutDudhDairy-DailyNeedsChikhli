
import React from 'react';
import { MILK_RATES } from '../constants';
import { ShoppingCart, Star, CheckCircle2, TrendingUp, Package, ArrowRight, Milk, Sparkles } from 'lucide-react';

interface MilkRatesProps {
  onOrderClick: () => void;
  onProductsClick: () => void;
}

const MilkRates: React.FC<MilkRatesProps> = ({ onOrderClick, onProductsClick }) => {
  return (
    <section id="rates" className="py-32 bg-cream/40 relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-10 opacity-10 animate-float text-dairy-brown"><Milk size={80} /></div>
      <div className="absolute bottom-20 right-10 opacity-10 animate-float text-orange-400" style={{ animationDelay: '2s' }}><Sparkles size={80} /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 reveal">
          <div className="inline-block px-6 py-2 bg-red-100/50 text-red-600 rounded-full font-black text-xs uppercase tracking-widest mb-4 border border-red-200">
             ताजे दूध दर (Live Rates)
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-dairy-brown mb-6 tracking-tighter">आमचे <span className="text-red-600">दूध दर</span></h2>
          <div className="w-32 h-2.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {MILK_RATES.map((item, idx) => (
            <div key={idx} className="reveal group relative">
              <div className={`relative overflow-hidden rounded-[3.5rem] bg-box-color border-2 transition-all duration-700 hover-card flex flex-col ${idx === 0 ? 'border-orange-200 shadow-orange-100/50' : 'border-dairy-brown/10 shadow-stone-200/50'}`}>
                
                {/* Header Section */}
                <div className={`p-10 pb-6 border-b border-stone-200/30 ${idx === 0 ? 'bg-orange-100/30' : 'bg-soft-tan/50'}`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 ${idx === 0 ? 'bg-orange-600 text-white' : 'bg-dairy-brown text-white'}`}>
                      <Milk size={48} />
                    </div>
                    <div className="text-right">
                       <span className={`px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest ${idx === 0 ? 'bg-orange-100 text-orange-600' : 'bg-stone-200 text-dairy-brown'}`}>
                          Best Choice
                       </span>
                       <div className="flex items-center gap-1 text-orange-400 mt-3 justify-end">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-black text-dairy-brown tracking-tighter">
                    {item.type}
                  </h3>
                </div>

                {/* Body Info */}
                <div className="p-10 space-y-8 flex-grow">
                  <p className="text-xl text-stone-600 font-medium leading-relaxed italic">
                    "{item.desc}"
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-cream rounded-2xl border border-orange-50 shadow-sm">
                       <CheckCircle2 className="text-green-500 w-5 h-5" />
                       <span className="font-bold text-stone-700">शुद्धता प्रमाणित</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-cream rounded-2xl border border-orange-50 shadow-sm">
                       <CheckCircle2 className="text-green-500 w-5 h-5" />
                       <span className="font-bold text-stone-700">ताजे संकलन</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-stone-200/50">
                    <div>
                       <span className="text-stone-400 font-black text-[10px] uppercase tracking-widest block mb-1">दर प्रति लिटर</span>
                       <div className="flex items-baseline gap-2">
                          <span className={`text-7xl font-black ${idx === 0 ? 'text-orange-600' : 'text-dairy-brown'}`}>₹{item.rate}</span>
                       </div>
                    </div>
                    
                    <button 
                      onClick={onOrderClick}
                      className="group/btn relative btn-hover w-24 h-24 bg-red-600 text-white rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_40px_rgba(220,38,38,0.3)] hover:bg-black transition-all transform hover:rotate-6 overflow-hidden"
                    >
                      <ShoppingCart className="w-10 h-10 group-hover/btn:scale-125 transition-transform duration-500" />
                      <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 blur-sm rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 reveal">
           <button 
            onClick={onProductsClick}
            className="group p-8 bg-dairy-brown text-white rounded-[3rem] flex items-center justify-between hover:bg-orange-600 transition-all shadow-2xl overflow-hidden relative"
           >
             <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center"><Package size={32} /></div>
                <div className="text-left">
                  <h4 className="text-2xl font-black">तूप, दही, पनीर</h4>
                  <p className="text-white/60 text-sm">आमची इतर खास उत्पादने पहा</p>
                </div>
             </div>
             <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform relative z-10" />
           </button>

           <div className="p-8 bg-green-100/50 rounded-[3rem] flex items-center gap-6 border border-green-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center"><TrendingUp size={32} /></div>
              <div className="text-left">
                <h4 className="text-2xl font-black text-green-900">मासिक सदस्यता</h4>
                <p className="text-green-700/70 text-sm">कमी दरात घरपोच सेवा</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MilkRates;
