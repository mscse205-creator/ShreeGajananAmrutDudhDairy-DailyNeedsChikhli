
import React, { useState, useEffect } from 'react';
import { Menu, X, Settings, Home, ShoppingBasket, Package } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: 'home' | 'order' | 'admin' | 'products') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'मुख्यपृष्ठ', id: 'home', icon: <Home className="w-4 h-4" /> },
    { name: 'उत्पादने', id: 'products', icon: <Package className="w-4 h-4" /> },
    { name: 'ऑर्डर करा', id: 'order', icon: <ShoppingBasket className="w-4 h-4" /> }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || currentView !== 'home' ? 'py-2 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative group">
              <h1 className={`text-xl md:text-2xl font-black transition-all text-dairy-brown leading-none`}>
                श्री गजानन <span className="text-orange-600">अमृत</span>
              </h1>
              <div className="flex flex-col mt-1">
                <p className="text-[9px] text-stone-400 font-black tracking-[0.2em] uppercase">दूध डेअरी, चिखली</p>
                <p className="text-[8px] text-orange-500 font-bold">।। गण गण गणात बोते ।।</p>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id as any)}
                className={`flex items-center gap-2 relative text-sm font-black transition-all group ${
                  currentView === link.id ? 'text-orange-600' : 'text-stone-600 hover:text-dairy-brown'
                }`}
              >
                {link.icon}
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all ${currentView === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            <div className="h-6 w-px bg-stone-200"></div>
            <button 
              onClick={() => onNavigate('admin')}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-100 text-stone-400 hover:bg-orange-50 hover:text-orange-600 rounded-full transition-all text-xs font-black uppercase tracking-widest"
            >
              <Settings className="w-4 h-4" /> Admin
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-white text-stone-600 shadow-lg border border-stone-100 hover:text-orange-600 transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-100 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id as any); setIsOpen(false); }}
              className={`flex items-center gap-4 w-full text-left text-xl font-black transition-colors ${
                currentView === link.id ? 'text-orange-600' : 'text-stone-600'
              }`}
            >
              {link.icon}
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-stone-50">
            <button onClick={() => { onNavigate('admin'); setIsOpen(false); }} className="flex items-center gap-2 text-stone-400 font-bold uppercase text-xs">
              <Settings className="w-4 h-4" /> Admin Access
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
