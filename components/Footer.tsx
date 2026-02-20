
import React from 'react';
import { Milk, Facebook, Instagram, Twitter } from 'lucide-react';
import { CONTACT_NUMBERS, PRIMARY_WHATSAPP } from '../constants';

interface FooterProps {
  onNavigate: (view: 'home' | 'order' | 'admin' | 'products') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-dairy-brown text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <Milk className="text-orange-400 w-8 h-8" />
              <h3 className="text-2xl font-bold">श्री गजानन अमृत</h3>
            </div>
            <p className="text-stone-400 text-lg">
              "शुद्ध दूध, शुद्ध विश्वास" <br />
              आमच्याकडे दर्जेदार दुधाची खात्री दिली जाते.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400 font-black uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-stone-300 hover:text-white transition-colors">मुख्यपृष्ठ</button></li>
              <li><button onClick={() => onNavigate('products')} className="text-stone-300 hover:text-white transition-colors">आमची उत्पादने</button></li>
              <li><button onClick={() => { onNavigate('home'); setTimeout(() => {document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}, 100)}} className="text-stone-300 hover:text-white transition-colors">आमच्याबद्दल</button></li>
              <li><button onClick={() => onNavigate('order')} className="text-stone-300 hover:text-white transition-colors font-bold text-orange-400">ऑर्डर करा</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400 font-black uppercase tracking-widest">उत्पादने</h4>
            <ul className="space-y-4">
              <li className="text-stone-300 cursor-pointer hover:text-orange-400 transition-colors" onClick={() => onNavigate('products')}>साजूक तूप</li>
              <li className="text-stone-300 cursor-pointer hover:text-orange-400 transition-colors" onClick={() => onNavigate('products')}>ताजे दही</li>
              <li className="text-stone-300 cursor-pointer hover:text-orange-400 transition-colors" onClick={() => onNavigate('products')}>मऊ पनीर</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400 font-black uppercase tracking-widest">मदत हवी आहे?</h4>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_NUMBERS[0]}`} className="block text-stone-300 hover:text-white transition-colors">
                कॉल करा: {CONTACT_NUMBERS[0]}
              </a>
              <a href={`https://wa.me/91${PRIMARY_WHATSAPP}`} className="block text-stone-300 hover:text-white transition-colors">
                WhatsApp: {PRIMARY_WHATSAPP}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} श्री गजानन अमृत दूध डेअरी, चिखली. सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
