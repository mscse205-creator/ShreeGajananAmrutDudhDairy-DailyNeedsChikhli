
import React from 'react';
import { OTHER_PRODUCTS, CONTACT_NUMBERS } from '../constants';
import { ShoppingCart, Star, CheckCircle2, Sparkles, Package } from 'lucide-react';

interface ProductsPageProps {
  onOrderClick: () => void;
  hideHeader?: boolean;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onOrderClick, hideHeader = false }) => {
  return (
    <div className="w-full">
      {!hideHeader && (
        <div className="text-center mb-16 reveal active">
          <h1 className="text-5xl md:text-7xl font-black text-dairy-brown mb-6 tracking-tighter">आमची <span className="text-orange-600">इतर उत्पादने</span></h1>
          <div className="w-32 h-2.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
          <p className="mt-8 text-xl text-stone-500 font-medium max-w-2xl mx-auto">
            ताज्या दुधापासून बनवलेले शुद्ध आणि सात्विक पदार्थ. घरच्या चवीचा आनंद घ्या!
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {OTHER_PRODUCTS.map((product, idx) => (
          <div key={idx} className="reveal active group">
            <div className="bg-box-color rounded-[3rem] overflow-hidden border border-orange-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(74,55,40,0.12)] transition-all duration-500 flex flex-col h-full">
              
              {/* Product Header */}
              <div className="p-8 pb-4">
                <div className="w-16 h-16 bg-orange-100/50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm">
                   <Package size={32} />
                </div>
                <div className="flex items-center gap-1 text-orange-400 mb-2">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-dairy-brown group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
              </div>

              <div className="p-8 pt-4 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-stone-500 font-medium text-base md:text-lg leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span className="font-bold text-stone-700">१००% नैसर्गिक आणि ताजे</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-orange-100/50 flex flex-col gap-4">
                  <div className="flex items-baseline justify-between">
                    <div className="flex flex-col">
                      <span className="text-stone-400 font-black text-[10px] uppercase tracking-widest">किंमत</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-dairy-brown">₹{product.rate}</span>
                        <span className="text-stone-400 font-bold text-xs uppercase">{product.unit}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={onOrderClick}
                    className="btn-shine btn-hover flex items-center justify-center gap-2 w-full py-4 bg-red-600 text-white rounded-2xl font-black shadow-lg hover:bg-black transition-all"
                  >
                    <ShoppingCart size={18} /> ऑर्डर नोंदवा
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!hideHeader && (
        <div className="mt-20 p-12 bg-dairy-brown rounded-[3rem] text-center text-white reveal active relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <h4 className="text-3xl font-black mb-4 tracking-tight relative z-10">विशेष सवलत!</h4>
           <p className="text-stone-300 font-medium mb-8 relative z-10">मोठ्या प्रमाणात (Bulk) ऑर्डरसाठी विशेष दरात सवलत उपलब्ध आहे.</p>
           <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
              <a href={`tel:${CONTACT_NUMBERS[1]}`} className="px-10 py-4 bg-red-600 rounded-2xl font-black hover:bg-box-color hover:text-red-600 transition-all shadow-xl">संपर्क करा: {CONTACT_NUMBERS[1]}</a>
           </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
