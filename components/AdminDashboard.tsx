
import React, { useState, useEffect } from 'react';
import { StoredOrder } from '../types';
import { Trash2, Phone, MessageCircle, ArrowLeft, RefreshCw, Calendar, MapPin, Lock, User, Eye, EyeOff } from 'lucide-react';

const AdminDashboard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [orders, setOrders] = useState<StoredOrder[]>([]);

  useEffect(() => {
    if (isLoggedIn) {
      const saved = localStorage.getItem('dairy_orders');
      if (saved) {
        setOrders(JSON.parse(saved).sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
      }
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Ram' && password === 'Ram') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('चुकीचा युजरनेम किंवा पासवर्ड!');
    }
  };

  const clearOrders = () => {
    if (window.confirm('सर्व ऑर्डर्स हटवायच्या आहेत का?')) {
      localStorage.removeItem('dairy_orders');
      setOrders([]);
    }
  };

  const deleteOrder = (id: string) => {
    const updated = orders.filter(o => o.id !== id);
    setOrders(updated);
    localStorage.setItem('dairy_orders', JSON.stringify(updated));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(74,55,40,0.15)] overflow-hidden border border-stone-100">
          <div className="bg-dairy-brown p-8 text-center relative">
            <div className="absolute top-4 left-4">
               <button onClick={onBack} className="text-white/60 hover:text-white transition-colors">
                 <ArrowLeft className="w-6 h-6" />
               </button>
            </div>
            <h2 className="text-2xl font-black text-white mt-4">।। गण गण गणात बोते ।।</h2>
            <p className="text-orange-300 font-bold uppercase tracking-widest text-xs mt-2">Admin Login</p>
          </div>
          
          <form onSubmit={handleLogin} className="p-10 space-y-6">
            {loginError && (
              <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100 text-center animate-shake">
                {loginError}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-black text-stone-400 uppercase tracking-[0.2em]">युजरनेम</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                <input 
                  type="text" 
                  required
                  placeholder="युजरनेम टाका"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-stone-50 border-2 border-stone-100 focus:border-orange-500 focus:bg-white outline-none transition-all font-bold"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-stone-400 uppercase tracking-[0.2em]">पासवर्ड</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="पासवर्ड टाका"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-stone-50 border-2 border-stone-100 focus:border-orange-500 focus:bg-white outline-none transition-all font-bold"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-500"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-dairy-brown text-white rounded-2xl font-black text-lg shadow-xl hover:bg-black active:scale-[0.98] transition-all transform hover:-translate-y-1"
            >
              लॉगिन करा
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-stone-600 hover:text-dairy-brown font-bold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> मुख्यपृष्ठावर जा
          </button>
          
          <div className="flex flex-col items-center">
             <div className="flex items-center gap-4 mb-1">
                <h1 className="text-2xl font-black text-dairy-brown">ऑर्डर डॅशबोर्ड</h1>
             </div>
            <p className="text-stone-500 text-sm font-medium">एकूण ऑर्डर्स: {orders.length}</p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 bg-stone-100 text-stone-600 rounded-lg hover:bg-stone-200 transition-colors font-bold text-sm"
            >
              Logout
            </button>
            <button 
              onClick={clearOrders}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-bold"
            >
              <Trash2 className="w-4 h-4" /> सर्व हटवा
            </button>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-[3rem] shadow-sm border border-stone-200 p-20 text-center">
            <RefreshCw className="w-12 h-12 text-stone-300 mx-auto mb-4 animate-spin" />
            <p className="text-stone-500 font-bold">अद्याप कोणतीही ऑर्डर मिळालेली नाही.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dairy-brown">{order.customerName}</h3>
                      <div className="flex items-center gap-4 text-sm text-stone-500 mt-1">
                        <span className="flex items-center gap-1 font-medium"><Calendar className="w-3 h-3" /> {new Date(order.timestamp).toLocaleString('mr-IN')}</span>
                        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-black uppercase text-[10px] tracking-widest">{order.milkType}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href={`tel:${order.mobileNumber}`} className="p-3 bg-stone-100 text-stone-600 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        <Phone className="w-5 h-5" />
                      </a>
                      <a 
                        href={`https://wa.me/91${order.mobileNumber}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                      <button onClick={() => deleteOrder(order.id)} className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-50">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                      <div>
                        <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest">पत्ता</p>
                        <p className="text-stone-700 font-medium">{order.address}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest">प्रमाण</p>
                      <p className="text-lg font-black text-dairy-brown">{order.quantity} लिटर</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest">वेळ</p>
                      <p className="text-lg font-black text-dairy-brown">{order.deliveryTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
