
import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { PRIMARY_WHATSAPP, CONTACT_NUMBERS } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-4 pointer-events-none">
      <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-stone-100 animate-in fade-in slide-in-from-right-10 duration-1000 delay-1000 pointer-events-auto">
         <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">ऑर्डर साठी</p>
         <p className="text-xs font-bold text-dairy-brown">कॉल किंवा WhatsApp करा!</p>
      </div>
      
      <div className="flex flex-col gap-3 pointer-events-auto">
        <a
          href={`tel:${CONTACT_NUMBERS[0]}`}
          className="group relative w-16 h-16 bg-dairy-brown text-white rounded-[1.8rem] shadow-2xl flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-110 active:scale-95 group"
          aria-label="Call Us"
        >
          <div className="absolute inset-0 bg-dairy-brown rounded-[1.8rem] animate-ping opacity-10"></div>
          <PhoneCall className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        </a>

        <a
          href={`https://wa.me/91${PRIMARY_WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 bg-[#25D366] text-white rounded-[1.8rem] shadow-2xl flex items-center justify-center transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 active:scale-95 group"
          aria-label="WhatsApp Us"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-[1.8rem] animate-ping opacity-20"></div>
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
