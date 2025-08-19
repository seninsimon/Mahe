import React from 'react';

const LanguageTicker = () => {
  const languages = [
    'മാഹേ',   // Malayalam
    'মাহে',    // Bengali
    'MAHÈ',    // English with accent
    'माहे',    // Hindi
    'ماہے',    // Urdu
    'மாஹே',    // Tamil
    'మాహే',    // Telugu
    'માહે',    // Gujarati
    'ମାହେ',    // Odia
    'মাহে'     // Assamese
  ];

  return (
    <div className="py-3 overflow-hidden" style={{ backgroundColor: '#8e4921' }}>
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex space-x-8 font-bold text-lg text-white"
          >
            {languages.map((lang, index) => (
              <span key={`${i}-${index}`} className="mx-8">{lang}</span>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LanguageTicker;
