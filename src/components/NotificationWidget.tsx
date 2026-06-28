import React, { useState } from 'react';
import { Check, X, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

interface NotificationWidgetProps {
  onAccept: () => void;
  lang: 'ID' | 'EN';
}

export const NotificationWidget: React.FC<NotificationWidgetProps> = ({ onAccept, lang }) => {
  const [dismissed, setDismissed] = useState(false);
  const [accepted, setAccepted] = useState(false);

  if (dismissed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full min-h-[300px] rounded-3xl bg-[#6084FF]/20 border border-[#6084FF]/40 p-6 flex flex-col items-center justify-center text-center text-white"
      >
        <Terminal className="text-[#FAFF00] mb-2" size={32} />
        <p className="text-sm font-mono text-gray-300">
          {lang === 'ID' ? 'Notifikasi disembunyikan.' : 'Notification dismissed.'}
        </p>
        <button
          onClick={() => setDismissed(false)}
          className="mt-3 text-xs text-[#FAFF00] underline cursor-pointer font-mono"
        >
          {lang === 'ID' ? 'Tampilkan lagi' : 'Restore widget'}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="h-full min-h-[320px] rounded-3xl bg-[#6084FF] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between text-[#0B0E14] mb-3 font-bold">
        <div className="flex items-center gap-2 bg-[#0B0E14] text-[#FAFF00] px-3 py-1 rounded-xl text-xs font-mono tracking-wider">
          <Sparkles size={14} />
          <span>KASI.IO</span>
        </div>
        <span className="text-xs font-mono tracking-widest uppercase opacity-80">Frontend.OS</span>
      </div>

      {/* Main Inset Window */}
      <div className="flex-1 bg-[#0B0E14] rounded-2xl overflow-hidden flex flex-col border border-white/10 shadow-inner">
        {/* Top Yellow Prompt */}
        <div className="bg-[#FAFF00] text-[#0B0E14] p-4 text-xs sm:text-sm font-semibold leading-snug">
          {lang === 'ID' 
            ? "Mencari Frontend Developer bermutu tinggi? Portofolio ini dibuat dengan presisi piksel maksimal."
            : "Almost there! Looking for a high-impact Frontend Engineer to elevate your web application?"}
        </div>

        {/* Bottom Dark Prompt */}
        <div className="p-4 text-xs sm:text-sm text-gray-200 font-mono flex-1 flex flex-col justify-center">
          <p className="text-[#8CE7FF] mb-1 font-bold">
            {lang === 'ID' ? "Fokus Utama:" : "Stay focused!"}
          </p>
          <p className="text-gray-300 leading-relaxed text-xs">
            {accepted 
              ? (lang === 'ID' ? "✔ Permintaan koneksi tercatat! Silakan gulir ke bawah." : "✔ Connection request logged! Let's build together.")
              : (lang === 'ID' ? "Keahlian React 19 & Tailwind v4 siap diuji. Klik centang untuk berdiskusi." : "Your next extraordinary digital product is calling...")}
          </p>
        </div>
      </div>

      {/* Bottom Circular Buttons exactly like reference! */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => setDismissed(true)}
          className="w-10 h-10 rounded-full bg-[#FAFF00] text-[#0B0E14] hover:bg-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
          title={lang === 'ID' ? "Tutup" : "Dismiss"}
        >
          <X size={20} className="stroke-[3]" />
        </button>
        <button
          onClick={() => {
            setAccepted(true);
            onAccept();
          }}
          className="w-10 h-10 rounded-full bg-[#FAFF00] text-[#0B0E14] hover:bg-[#8CE7FF] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer animate-bounce"
          title={lang === 'ID' ? "Setuju / Hubungi" : "Connect"}
        >
          <Check size={20} className="stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
