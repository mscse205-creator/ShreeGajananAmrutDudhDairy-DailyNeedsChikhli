
import React from 'react';
import { CONTACT_NUMBERS, ADDRESS } from '../constants';
import { Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-cream/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dairy-brown mb-4">आमच्याशी संपर्क करा</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-soft-tan p-8 rounded-[2.5rem] border border-orange-100 shadow-sm flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-dairy-brown mb-3">फोन नंबर</h4>
              <div className="flex flex-col gap-2">
                {CONTACT_NUMBERS.map(num => (
                  <a key={num} href={`tel:${num}`} className="text-stone-600 hover:text-orange-600 font-bold text-xl transition-colors">
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-soft-tan p-8 rounded-[2.5rem] border border-orange-100 shadow-sm flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-dairy-brown mb-3">डेअरी पत्ता</h4>
              <p className="text-stone-600 leading-relaxed text-lg font-medium max-w-xs">
                {ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
