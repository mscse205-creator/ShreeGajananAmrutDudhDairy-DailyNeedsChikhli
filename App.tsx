
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MilkRates from './components/MilkRates';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdminDashboard from './components/AdminDashboard';
import ProductsPage from './components/ProductsPage';
import { ArrowLeft } from 'lucide-react';

type ViewType = 'home' | 'order' | 'admin' | 'products';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin-panel') {
        setView('admin');
      } else if (window.location.hash === '#order-now') {
        setView('order');
      } else if (window.location.hash === '#products') {
        setView('products');
      } else {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (newView: ViewType) => {
    if (newView === 'home') window.location.hash = '';
    if (newView === 'order') window.location.hash = 'order-now';
    if (newView === 'admin') window.location.hash = 'admin-panel';
    if (newView === 'products') window.location.hash = 'products';
    setView(newView);
    window.scrollTo(0, 0);
  };

  if (view === 'admin') {
    return <AdminDashboard onBack={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-200 selection:text-orange-900 bg-cream">
      <Header currentView={view} onNavigate={navigateTo} />
      
      <main className="flex-grow transition-opacity duration-500">
        {view === 'home' && (
          <div className="animate-in fade-in duration-700">
            <Hero 
              onOrderClick={() => navigateTo('order')} 
              onProductsClick={() => navigateTo('products')}
            />
            <About />
            <MilkRates 
              onOrderClick={() => navigateTo('order')} 
              onProductsClick={() => navigateTo('products')}
            />
            
            {/* Quick Product Rates on Front Page */}
            <div className="bg-cream/50 py-12 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                   <h2 className="text-3xl md:text-5xl font-black text-dairy-brown">आमची <span className="text-orange-600">विशेष उत्पादने</span></h2>
                   <p className="text-stone-500 font-bold mt-2">ताजे तूप, दही आणि पनीर</p>
                </div>
                <ProductsPage onOrderClick={() => navigateTo('order')} />
              </div>
            </div>
            
            <Contact />
          </div>
        )}

        {view === 'products' && (
          <div className="animate-in slide-in-from-right-10 fade-in duration-500 py-24 md:py-32">
             <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center">
              <button 
                onClick={() => navigateTo('home')}
                className="mb-8 flex items-center gap-2 px-6 py-3 bg-box-color border-2 border-orange-100 text-dairy-brown rounded-full font-black text-sm shadow-md hover:border-orange-500 hover:text-orange-600 transition-all group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
                मागे जा (Back)
              </button>
              <ProductsPage onOrderClick={() => navigateTo('order')} />
            </div>
          </div>
        )}

        {view === 'order' && (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-500 py-24 md:py-32 bg-cream/20">
            <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center">
              <button 
                onClick={() => navigateTo('home')}
                className="mb-8 flex items-center gap-2 px-6 py-3 bg-box-color border-2 border-orange-100 text-dairy-brown rounded-full font-black text-sm shadow-md hover:border-orange-500 hover:text-orange-600 transition-all group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
                मागे जा (Back)
              </button>
              
              <div className="text-center">
                <h1 className="text-4xl md:text-7xl font-black text-dairy-brown mb-4 tracking-tighter">दुधाची <span className="text-orange-600">ऑर्डर</span> नोंदवा</h1>
                <p className="text-stone-500 font-medium text-lg max-w-xl mx-auto">खालील फॉर्म भरा, आम्ही तुमच्या घरी ताजे आणि शुद्ध दूध पोहोचवू.</p>
              </div>
            </div>
            
            <OrderForm onCancel={() => navigateTo('home')} />
          </div>
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
