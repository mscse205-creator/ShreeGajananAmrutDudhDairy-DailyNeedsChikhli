
import React from 'react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeMap[size]} transition-transform duration-500 hover:scale-110 group`}>
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Outer circle */}
        <circle 
          cx="200" 
          cy="200" 
          r="150"
          stroke="#7a2d0c"
          strokeWidth="6"
          fill="white" 
          className="transition-all duration-500 group-hover:stroke-orange-500"
        />

        {/* Brand Text */}
        <text 
          x="200" 
          y="180" 
          textAnchor="middle" 
          className="fill-[#7a2d0c] font-black" 
          style={{ fontSize: '56px', fontFamily: 'Noto Sans Devanagari, serif' }}
        >
          श्री गजानन
        </text>
        <text 
          x="200" 
          y="230" 
          textAnchor="middle" 
          className="fill-orange-600 font-bold" 
          style={{ fontSize: '38px', fontFamily: 'Noto Sans Devanagari, serif' }}
        >
          अमृत दूध
        </text>

        {/* Tagline */}
        <text 
          x="200" 
          y="270" 
          textAnchor="middle" 
          className="fill-stone-500 font-bold italic" 
          style={{ fontSize: '18px', fontFamily: 'Noto Sans Devanagari' }}
        >
          ।। गण गण गणात बोते ।।
        </text>

        <path id="curve" d="M 80,310 A 120,120 0 0,0 320,310" fill="transparent" />
        <text className="fill-stone-400 font-bold" style={{ fontSize: '14px', fontFamily: 'Noto Sans Devanagari' }}>
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            शुद्ध दूध, शुद्ध विश्वास
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
