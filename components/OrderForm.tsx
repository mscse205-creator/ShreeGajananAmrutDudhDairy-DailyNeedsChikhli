
import React, { useState, useMemo } from 'react';
import { MilkType, DeliveryTime, OrderFormData, StoredOrder } from '../types';
import { PRIMARY_WHATSAPP, OWNER_EMAIL, MILK_RATES } from '../constants';
import { Send, CheckCircle, Database, Loader2, ArrowLeft, Info, ReceiptText, Heart, Sparkles, Check } from 'lucide-react';

interface OrderFormProps {
  onCancel?: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onCancel }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    address: '',
    milkType: MilkType.COW,
    quantity: '1',
    deliveryTime: DeliveryTime.MORNING,
    isMonthlySubscription: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const totalPrice = useMemo(() => {
    const rateObj = MILK_RATES.find(r => r.type.includes(formData.milkType === MilkType.COW ? 'गाय' : 'म्हेस'));
    const rate = rateObj ? rateObj.rate : 0;
    return (parseFloat(formData.quantity) || 0) * rate;
  }, [formData.milkType, formData.quantity]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      const newOrder: StoredOrder = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };

      const existingOrders = JSON.parse(localStorage.getItem('dairy_orders') || '[]');
      localStorage.setItem('dairy_orders', JSON.stringify([...existingOrders, newOrder]));

      const emailPayload = {
        _subject: `🥛 नवीन दूध ऑर्डर: ${formData.customerName}`,
        "ग्राहक नाव": formData.customerName,
        "मोबाईल": formData.mobileNumber,
        "पत्ता": formData.address,
        "दूध प्रकार": formData.milkType,
        "प्रमाण (लिटर)": formData.quantity,
        "एकूण किंमत": `₹${totalPrice}`,
        "डिलिव्हरी वेळ": formData.deliveryTime,
        "मासिक सबस्क्रिप्शन": formData.isMonthlySubscription ? 'हो (Yes)' : 'नाही (No)',
        "वेळ": new Date().toLocaleString('mr-IN'),
        _template: 'table'
      };

      await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      const message = `*🥛 नवीन दुधाची ऑर्डर (Order Confirmation)*\n\n` +
        `👤 *नाव:* ${formData.customerName}\n` +
        `📞 *मोबाईल:* ${formData.mobileNumber}\n` +
        `📍 *पत्ता:* ${formData.address}\n` +
        `🥛 *दूध प्रकार:* ${formData.milkType}\n` +
        `⚖️ *प्रमाण:* ${formData.quantity} लिटर\n` +
        `💰 *एकूण अंदाजे किंमत:* ₹${totalPrice}\n` +
        `⏰ *वेळ:* ${formData.deliveryTime}\n` +
        `📅 *सबस्क्रिप्शन:* ${formData.isMonthlySubscription ? '✅ हो' : '❌ नाही'}\n\n` +
        `धन्यवाद! श्री गजानन अमृत दूध डेअरी.`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/91${PRIMARY_WHATSAPP}?text=${encodedMessage}`, '_blank');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("ऑर्डर पाठवताना काही अडचण आली. कृपया पुन्हा प्रयत्न करा.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-box-color rounded-[3rem] shadow-[0_50px_100px_rgba(74,55,40,0.12)] p-6 md:p-12 border border-orange-100 relative overflow-hidden">
        
        {isSubmitted ? (
          <div className="bg-orange-50/50 border-2 border-orange-100 rounded-[3.5rem] p-10 md:p-20 text-center animate-in fade-in zoom-in duration-700 relative overflow-hidden">
            <div className="absolute top-10 left-10 text-orange-200 animate-pulse"><Sparkles size={48} /></div>
            <div className="absolute bottom-10 right-10 text-orange-200 animate-pulse delay-500"><Sparkles size={32} /></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-bounce">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-dairy-brown mb-6">धन्यवाद, {formData.customerName.split(' ')[0]}!</h3>
              
              <div className="space-y-4 mb-12">
                <p className="text-2xl font-bold text-orange-600">तुमची ऑर्डर यशस्वीरीत्या नोंदवली गेली आहे.</p>
                <p className="text-stone-500 font-medium text-lg max-w-lg mx-auto leading-relaxed">
                  आमच्यावर विश्वास ठेवल्याबद्दल आम्ही आपले मनापासून आभारी आहोत. आम्ही लवकरच ताजे दूध तुमच्या दारापर्यंत पोहोचवण्यासाठी संपर्क करू.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={onCancel}
                  className="w-full sm:w-auto px-12 py-5 bg-dairy-brown text-white rounded-[2rem] font-black text-lg shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  मुख्यपृष्ठावर जा
                </button>
                <div className="flex items-center gap-2 text-orange-600 font-black italic">
                  <Heart className="fill-orange-600" size={20} /> श्री गजानन अमृत परिवार
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-dairy-brown mb-2">ऑर्डर नोंदवा</h2>
                <p className="text-stone-500 font-medium">शुद्ध दुधासाठी फक्त एका क्लिकवर ऑर्डर करा.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-400 uppercase tracking-widest">ग्राहक नाव</label>
                  <input
                    required
                    type="text"
                    placeholder="तुमचे पूर्ण नाव टाका"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-orange-100 bg-cream focus:bg-white focus:border-orange-500 outline-none transition-all font-bold text-dairy-brown"
                    value={formData.customerName}
                    onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-400 uppercase tracking-widest">मोबाईल नंबर</label>
                  <input
                    required
                    type="tel"
                    placeholder="उदा. 860543XXXX"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-orange-100 bg-cream focus:bg-white focus:border-orange-500 outline-none transition-all font-bold text-dairy-brown"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-400 uppercase tracking-widest">पत्ता</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="तुमचा पूर्ण पत्ता येथे टाका"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-orange-100 bg-cream focus:bg-white focus:border-orange-500 outline-none transition-all font-bold text-dairy-brown"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-stone-400 uppercase tracking-widest">दूध प्रकार</label>
                    <select
                      className="w-full px-6 py-4 rounded-2xl border-2 border-orange-100 bg-cream focus:bg-white focus:border-orange-500 outline-none transition-all font-bold appearance-none text-dairy-brown"
                      value={formData.milkType}
                      onChange={(e) => setFormData({...formData, milkType: e.target.value as MilkType})}
                    >
                      <option value={MilkType.COW}>गाय (Cow)</option>
                      <option value={MilkType.BUFFALO}>म्हेस (Buffalo)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-stone-400 uppercase tracking-widest">लिटर प्रमाण</label>
                    <input
                      required
                      type="number"
                      min="0.5"
                      step="0.5"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-orange-100 bg-cream focus:bg-white focus:border-orange-500 outline-none transition-all font-bold text-dairy-brown"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-400 uppercase tracking-widest">डिलिव्हरी वेळ</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, deliveryTime: DeliveryTime.MORNING})}
                      className={`py-4 rounded-2xl border-2 text-sm font-black transition-all ${formData.deliveryTime === DeliveryTime.MORNING ? 'bg-red-600 border-red-600 text-white shadow-lg' : 'bg-soft-tan border-orange-100 text-stone-500'}`}
                    >
                      सकाळ
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, deliveryTime: DeliveryTime.EVENING})}
                      className={`py-4 rounded-2xl border-2 text-sm font-black transition-all ${formData.deliveryTime === DeliveryTime.EVENING ? 'bg-red-600 border-red-600 text-white shadow-lg' : 'bg-soft-tan border-orange-100 text-stone-500'}`}
                    >
                      संध्याकाळ
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="btn-shine btn-hover group relative w-full flex items-center justify-center gap-4 py-8 bg-gradient-to-r from-red-600 to-red-800 text-white text-2xl font-black rounded-3xl shadow-[0_20px_40px_rgba(220,38,38,0.3)] hover:from-red-700 hover:to-red-900 transition-all active:scale-95 disabled:opacity-70"
                >
                  {isSending ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="animate-spin w-8 h-8" />
                      <span>ऑर्डर पाठवत आहे...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                      ऑर्डर पूर्ण करा
                      <Check className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-soft-tan/50 rounded-[2.5rem] p-8 border border-orange-100 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-orange-600 mb-6">
                    <ReceiptText className="w-6 h-6" />
                    <span className="font-black uppercase tracking-widest text-sm">ऑर्डर बिल (Summary)</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-stone-600 font-bold">
                      <span>दूध प्रकार:</span>
                      <span className="text-dairy-brown">{formData.milkType}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-600 font-bold">
                      <span>प्रमाण:</span>
                      <span className="text-dairy-brown">{formData.quantity} लिटर</span>
                    </div>
                    <div className="h-px bg-orange-200/50 my-4"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-black text-dairy-brown">एकूण किंमत:</span>
                      <span className="text-4xl font-black text-red-600">₹{totalPrice}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-box-color rounded-2xl border border-orange-200 flex gap-3 items-start shadow-inner">
                    <div className="p-2 bg-green-100/50 text-green-600 rounded-lg">
                      <Info className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-stone-500 font-medium">
                      आमच्याकडे दुधाची शुद्धता दररोज तपासली जाते. तुम्हाला दर्जेदार दूध मिळेल याची आम्ही ग्वाही देतो.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.2em]">।। गण गण गणात बोते ।।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
