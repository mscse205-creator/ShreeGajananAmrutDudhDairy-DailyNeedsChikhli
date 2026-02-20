
import React from 'react';
import { FEATURES, TIMINGS } from '../constants';
import { Clock, Quote, Droplet, ShieldCheck, Truck, Heart } from 'lucide-react';

const About: React.FC = () => {
  const processSteps = [
    { icon: <Droplet className="w-10 h-10" />, label: 'संकलन', desc: 'थेट गोठ्यातून ताजे दूध.', color: 'bg-blue-100/50 text-blue-600' },
    { icon: <ShieldCheck className="w-10 h-10" />, label: 'चाचणी', desc: 'शुद्धतेची लॅब तपासणी.', color: 'bg-orange-100/50 text-orange-600' },
    { icon: <Truck className="w-10 h-10" />, label: 'वितरण', desc: 'हायजीनिक रितीने वितरण.', color: 'bg-green-100/50 text-green-600' },
    { icon: <Heart className="w-10 h-10" />, label: 'आनंद', desc: 'शुद्ध दुधाचा खरा स्वाद.', color: 'bg-red-100/50 text-red-600' }
  ];

  return (
    <section id="about" className="py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 reveal">
           <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Purity</span>
           <h2 className="text-5xl md:text-7xl font-black text-dairy-brown tracking-tighter leading-tight">आमची <span className="text-orange-600">खास वैशिष्ट्ये</span></h2>
           <div className="w-32 h-2.5 bg-orange-200 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {FEATURES.map((f, i) => (
            <div key={i} className={`reveal p-10 rounded-[3rem] border transition-all duration-500 shadow-sm hover:shadow-xl ${i === 1 ? 'bg-dairy-brown text-white border-dairy-brown' : 'bg-box-color border-orange-100'}`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${i === 1 ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600'}`}>
                {f.icon}
              </div>
              <h4 className="text-3xl font-black mb-4">{f.title}</h4>
              <p className={`text-lg font-medium leading-relaxed ${i === 1 ? 'text-stone-300' : 'text-stone-500'}`}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 reveal">
          {processSteps.map((step, i) => (
            <div key={i} className="group text-center space-y-6">
              <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center ${step.color} shadow-lg transition-transform duration-500 hover:scale-110 border border-white/20`}>
                {step.icon}
              </div>
              <div>
                <h5 className="text-2xl font-black text-dairy-brown">{step.label}</h5>
                <p className="text-stone-400 font-medium text-sm mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal relative bg-box-color p-12 md:p-24 rounded-[4rem] shadow-2xl border border-orange-100 overflow-hidden">
           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                 <div className="p-4 bg-orange-600 text-white inline-block rounded-2xl shadow-xl transform -rotate-3"><Quote size={48} /></div>
                 <h3 className="text-4xl md:text-5xl font-black text-dairy-brown leading-tight italic">
                   "शुद्धतेचा ध्यास, विश्वासाचा अमृत कलश - थेट गोठ्यातून तुमच्या दारापर्यंत."
                 </h3>
                 <p className="text-orange-600 font-black text-2xl tracking-[0.3em]">।। गण गण गणात बोते ।।</p>
              </div>
              
              <div className="flex-1 w-full">
                 <div className="grid grid-cols-1 gap-6">
                    <div className="p-10 bg-dairy-brown rounded-[3rem] text-white flex justify-between items-center transition-colors hover:bg-black">
                       <div>
                          <p className="text-orange-400 font-black text-xs uppercase tracking-widest mb-2">सकाळची वेळ</p>
                          <p className="text-4xl font-black">{TIMINGS.morning}</p>
                       </div>
                       <Clock className="w-12 h-12 text-orange-400" />
                    </div>
                    <div className="p-10 bg-soft-tan rounded-[3rem] text-dairy-brown border-2 border-dairy-brown flex justify-between items-center transition-colors hover:bg-orange-100/50">
                       <div>
                          <p className="text-stone-400 font-black text-xs uppercase tracking-widest mb-2">संध्याकाळची वेळ</p>
                          <p className="text-4xl font-black">{TIMINGS.evening}</p>
                       </div>
                       <Clock className="w-12 h-12 text-dairy-brown" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
