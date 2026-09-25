import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please provide a message with at least 5 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Frontend-only simulation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Have a question?
        </h1>
        <div className="w-12 h-1 bg-[#6046EC] rounded-full mx-auto mt-3"></div>
        <p className="mt-4 text-base text-slate-500 max-w-md mx-auto">
          Tell us what you need help with. We're here to assist you with any inquiries or feedback.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/80 shadow-[0_8px_30px_rgba(79,70,229,0.05)]">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-300 focus:border-red-500 bg-red-50/20'
                      : 'border-slate-200 focus:border-[#6046EC] focus:ring-1 focus:ring-[#6046EC]'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-300 focus:border-red-500 bg-red-50/20'
                      : 'border-slate-200 focus:border-[#6046EC] focus:ring-1 focus:ring-[#6046EC]'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help?"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-300 focus:border-red-500 bg-red-50/20'
                      : 'border-slate-200 focus:border-[#6046EC] focus:ring-1 focus:ring-[#6046EC]'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitting}
                className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#5B43EE] to-[#7B42F6] hover:brightness-105 active:shadow-md transition-all flex items-center justify-center gap-2 shadow-md shadow-purple-500/20 cursor-pointer"
              >
                {submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 stroke-[2.2]" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-6"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 stroke-[2.4]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Message Sent!</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6 leading-relaxed">
                Thank you for reaching out. We received your note and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-purple-50 text-[#6046EC] hover:bg-purple-100 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Direct Contact info */}
      <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5" /> support@pdfmerge.local
        </span>
        <span>•</span>
        <span className="flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5" /> Fast community help
        </span>
      </div>
    </div>
  );
};
