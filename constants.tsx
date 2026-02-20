
import React from 'react';
import { ShieldCheck, Award, Clock, Leaf, Star, Sparkles } from 'lucide-react';

export const CONTACT_NUMBERS = ['9028656163', '8605431321', '8149892578'];
export const PRIMARY_WHATSAPP = '8605431321';
export const OWNER_EMAIL = 'mohitsatav7387@gmail.com'; 
export const ADDRESS = 'रॉयल रेसिडेन्सी हाके कॉम्प्लेक्स जवळ, बैलजोडी मागे, चिंच परिसर, चिखली';

export const MILK_RATES = [
  { 
    type: 'गाय दूध (Cow Milk)', 
    rate: 60, 
    unit: 'प्रति लिटर', 
    desc: 'हलके आणि पचायला सोपे, मुलांसाठी सर्वोत्तम.'
  },
  { 
    type: 'म्हेस दूध (Buffalo Milk)', 
    rate: 80, 
    unit: 'प्रति लिटर', 
    desc: 'घट्ट आणि क्रीमी, चहा-कॉफी आणि दह्यासाठी उत्तम.'
  }
];

export const OTHER_PRODUCTS = [
  {
    name: 'शुद्ध साजूक तूप (Pure Ghee)',
    rate: 800,
    unit: 'प्रति किलो',
    desc: 'पारंपारिक पद्धतीने बनवलेले दाणेदार और सुगंधी तूप.',
  },
  {
    name: 'ताजे दही (Fresh Curd)',
    rate: 80,
    unit: 'प्रति किलो',
    desc: 'घट्ट, पांढरेशुभ्र आणि नैसर्गिक रित्या लावलेले गोड दही.',
  },
  {
    name: 'मऊ पनीर (Fresh Paneer)',
    rate: 400,
    unit: 'प्रति किलो',
    desc: 'अत्यंत मऊ और ताज्या दुधापासून बनवलेले पनीर.',
  }
];

export const STATS = [
  { icon: <Sparkles className="w-5 h-5" />, value: '१००%', label: 'ताजं आणि शुद्ध' },
  { icon: <Leaf className="w-5 h-5" />, value: 'नैसर्गिक', label: 'उत्पादन' },
  { icon: <Star className="w-5 h-5" />, value: 'A1', label: 'गुणवत्ता' }
];

export const FEATURES = [
  { 
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: 'शुद्धतेची हमी', 
    desc: 'आम्ही देतो भेसळमुक्त दुधाची १००% खात्री.' 
  },
  { 
    icon: <Award className="w-6 h-6" />, 
    title: 'फॅट टेस्टिंग मशीन', 
    desc: 'दुधाची गुणवत्ता तपासूनच वितरण केले जाते.' 
  },
  { 
    icon: <Clock className="w-6 h-6" />, 
    title: 'वेळेवर सेवा', 
    desc: 'दररोज ताजे दूध तुमच्या दारापर्यंत योग्य वेळेत.' 
  }
];

export const TIMINGS = {
  morning: '७:०० AM – ११:०० AM',
  evening: '५:०० PM – ९:३० PM'
};
