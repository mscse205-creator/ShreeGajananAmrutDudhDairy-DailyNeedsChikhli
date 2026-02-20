
import React from 'react';
import { Phone, MessageCircle, ChevronRight, ShoppingBag, PhoneCall, Package, Star, Heart, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { CONTACT_NUMBERS, PRIMARY_WHATSAPP } from '../constants';

interface HeroProps {
  onOrderClick: () => void;
  onProductsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick, onProductsClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream/30 pt-24 pb-20">
      {/* Interactive Background Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-50/40 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Decoration Icons */}
        <div className="absolute top-[20%] left-[10%] opacity-20 animate-float"><Zap size={48} className="text-orange-400" /></div>
        <div className="absolute bottom-[20%] right-[10%] opacity-20 animate-float" style={{ animationDelay: '2s' }}><Heart size={48} className="text-red-400" /></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left space-y-10">
            <div className="reveal space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-orange-100/50 border border-orange-200 text-orange-600 font-black text-xs uppercase tracking-widest animate-bounce">
                <Star size={16} fill="currentColor" className="text-orange-600" /> 
                चिखलीतील नं. १ विश्वसनीय डेअरी
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black text-dairy-brown tracking-tighter leading-[0.95]">
                श्री गजानन अमृत <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 drop-shadow-md">
                  दूध डेअरी
                </span>
              </h1>
              
              <p className="text-xl md:text-3xl text-stone-500 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                "थेट गोठ्यातून तुमच्या दारापर्यंत, शुद्धता आणि प्रेमाचा गोडवा."
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                 {['ताजे दूध', 'साजूक तूप', 'घट्ट दही', 'मऊ पनीर'].map((item) => (
                   <span key={item} className="px-4 py-2 bg-box-color border border-orange-100 rounded-xl text-dairy-brown font-bold text-sm shadow-sm flex items-center gap-2">
                     <Sparkles size={14} className="text-orange-500" /> {item}
                   </span>
                 ))}
              </div>
            </div>

            {/* Action Group */}
            <div className="reveal flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-2 bg-red-600/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <button
                  onClick={onOrderClick}
                  className="btn-shine-fast relative flex items-center gap-4 px-10 py-6 bg-red-600 text-white rounded-[2rem] font-black text-2xl shadow-[0_20px_40px_rgba(220,38,38,0.4)] hover:bg-black transition-all hover:scale-105 active:scale-95 overflow-hidden animate-pulse-glow"
                >
                  <ShoppingBag className="w-8 h-8" />
                  दूध ऑर्डर करा
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              <div className="flex flex-col items-center">
                <button
                  onClick={onProductsClick}
                  className="flex items-center gap-3 px-8 py-6 bg-box-color border-2 border-orange-100 text-dairy-brown rounded-[2rem] font-black text-xl hover:border-orange-500 hover:text-orange-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <Package className="w-6 h-6 text-orange-500" />
                  तूप, दही, पनीर
                </button>
                <p className="text-[10px] font-black text-stone-400 mt-2 uppercase tracking-widest">इतर शुद्ध उत्पादने</p>
              </div>
            </div>

            {/* Contact Quick Link */}
            <div className="reveal flex flex-wrap justify-center lg:justify-start gap-4">
               <a href={`tel:${CONTACT_NUMBERS[0]}`} className="flex items-center gap-2 px-6 py-3 bg-soft-tan rounded-full font-bold text-stone-600 border border-stone-200 hover:bg-orange-50 hover:text-orange-600 transition-all">
                  <PhoneCall size={18} /> {CONTACT_NUMBERS[0]}
               </a>
               <a href={`https://wa.me/91${PRIMARY_WHATSAPP}`} className="flex items-center gap-2 px-6 py-3 bg-green-100/50 rounded-full font-bold text-green-700 border border-green-200 hover:bg-green-600 hover:text-white transition-all">
                  <MessageCircle size={18} /> WhatsApp
               </a>
            </div>
          </div>

          {/* Right Side: Interactive Visual Card */}
          <div className="flex-1 relative reveal">
            <div className="relative z-10 p-10 bg-box-color rounded-[4rem] shadow-[0_50px_100px_rgba(45,30,18,0.12)] border border-orange-100 hover-card">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-float">
                  <div className="text-center">
                    <p className="text-3xl font-black">१००%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest">शुद्धता</p>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="flex items-center gap-4 p-6 bg-cream rounded-3xl border border-orange-50">
                    <div className="w-12 h-12 bg-box-color rounded-2xl flex items-center justify-center text-orange-600 shadow-sm"><ShieldCheck /></div>
                    <div>
                      <h4 className="font-black text-dairy-brown text-xl">लॅब टेस्टेड दूध</h4>
                      <p className="text-stone-500 text-sm">प्रगत फॅट मशीनद्वारे तपासलेले</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                     <p className="text-orange-600 font-black text-center tracking-[0.4em] uppercase text-sm">।। गण गण गणात बोते ।।</p>
                     <div className="h-2 w-full bg-gradient-to-r from-transparent via-orange-300 to-transparent rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 bg-soft-tan rounded-3xl text-center">
                        <p className="text-3xl font-black text-dairy-brown">५००+</p>
                        <p className="text-[10px] font-bold text-stone-400 uppercase">आनंदी ग्राहक</p>
                     </div>
                     <div className="p-6 bg-soft-tan rounded-3xl text-center">
                        <p className="text-3xl font-black text-dairy-brown">२४/७</p>
                        <p className="text-[10px] font-bold text-stone-400 uppercase">सपोर्ट सेवा</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/30 rounded-full blur-[100px] -z-10"></div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 fill-cream">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,34.13V0Z" fill="white" fillOpacity="0.2"></path>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
