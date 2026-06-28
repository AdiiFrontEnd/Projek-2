import React, { useState } from 'react';
import { X, Send, Sparkles, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  lang: 'ID' | 'EN';
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, email, lang }) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', budget: '$1,000 - $5,000', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#0B0E14] border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
        >
          <X size={18} />
        </button>

        {sent ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#FAFF00] text-[#0B0E14] rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(250,255,0,0.5)]">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-black">{lang === 'ID' ? 'Pesan Terkirim!' : 'Message Broadcasted!'}</h3>
            <p className="text-sm text-gray-400 font-mono">
              {lang === 'ID' 
                ? `Terima kasih! Kasi Muhammad akan membalas ke email Anda dalam < 24 jam.`
                : `Thanks for reaching out! Kasi Muhammad will respond within 24 hours.`}
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#8CE7FF] font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>Direct Developer Dispatch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'ID' ? 'Mulai Diskusi Proyek' : "Let's Build Something Iconic"}
            </h2>
            <p className="text-xs text-gray-400 font-mono mt-1">
              Direct email link: <strong className="text-white">{email}</strong>
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">{lang === 'ID' ? 'Nama Anda' : 'Your Name'}</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3.5 text-gray-500" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe / Tech Lead"
                    className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FAFF00] transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">{lang === 'ID' ? 'Email Anda' : 'Email Address'}</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-500" />
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FAFF00] transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">{lang === 'ID' ? 'Estimasi Anggaran' : 'Project Scope / Budget'}</label>
                <select
                  value={formData.budget}
                  onChange={e => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-[#1A202C] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FAFF00] transition-all font-mono"
                >
                  <option value="< $1,000">&lt; $1,000 USD (Consultation / Minor Fix)</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000 USD (Landing Page / Component UI)</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000 USD (Full Web Application)</option>
                  <option value="Retainer / Full-Time">Monthly Retainer / Full-Time Role</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-300 block mb-1">{lang === 'ID' ? 'Detail Proyek' : 'Project Details'}</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your timeline, stack preference, or design vision..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-[#FAFF00] transition-all font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#FAFF00] text-[#0B0E14] font-black text-sm uppercase tracking-wider hover:bg-[#8CE7FF] shadow-[0_0_20px_rgba(250,255,0,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>{lang === 'ID' ? 'Kirim Proposal Sekarang' : 'Transmit Message'}</span>
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
