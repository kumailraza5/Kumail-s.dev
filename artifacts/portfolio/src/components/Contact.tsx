import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, CheckCircle, XCircle, Loader2, Copy, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAIL = 'kumailr436@gmail.com';
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[3rem] p-5 sm:p-8 md:p-16 backdrop-blur-xl relative overflow-hidden">

          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16">

            {/* Left — info */}
            <div className="w-full md:w-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3"
              >
                Get In Touch
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black mb-6"
              >
                Let's build <br />something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  epic.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60 font-light mb-10 leading-relaxed"
              >
                Whether you have a project in mind or just want to explore possibilities, I'm ready
                to bring your vision to life with bleeding-edge technology.
              </motion.p>

              <div className="flex flex-col gap-4">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white/50 uppercase tracking-widest font-medium mb-1">Email</div>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-white font-medium hover:text-blue-400 transition-colors truncate block"
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <button
                    onClick={handleCopy}
                    title="Copy email"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </motion.div>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/923332856555"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group w-fit"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase tracking-widest font-medium mb-1">WhatsApp</div>
                    <div className="text-white font-medium group-hover:text-green-400 transition-colors">+92 333 285 6555</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Right — form */}
            <div className="w-full md:w-1/2">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Name */}
                <div className="relative group">
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-background/50 border border-white/10 focus:border-blue-500/70 rounded-xl px-6 py-4 text-white focus:outline-none peer placeholder-transparent transition-all shadow-[0_0_0_0_rgba(59,130,246,0)] focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] disabled:opacity-50"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-6 top-4 text-white/40 transition-all text-sm cursor-text
                      peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-[#0d0d0f] peer-focus:px-2
                      peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-[#0d0d0f] peer-valid:px-2"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    name="from_email"
                    id="email"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-background/50 border border-white/10 focus:border-blue-500/70 rounded-xl px-6 py-4 text-white focus:outline-none peer placeholder-transparent transition-all shadow-[0_0_0_0_rgba(59,130,246,0)] focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] disabled:opacity-50"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-6 top-4 text-white/40 transition-all text-sm cursor-text
                      peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-[#0d0d0f] peer-focus:px-2
                      peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-[#0d0d0f] peer-valid:px-2"
                  >
                    Email Address
                  </label>
                </div>

                {/* Subject */}
                <div className="relative group">
                  <select
                    name="subject"
                    id="subject"
                    required
                    defaultValue=""
                    disabled={status === 'sending'}
                    className="w-full bg-background/50 border border-white/10 focus:border-blue-500/70 rounded-xl px-6 py-4 text-white focus:outline-none peer appearance-none transition-all shadow-[0_0_0_0_rgba(59,130,246,0)] focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] disabled:opacity-50 [&:invalid]:text-transparent"
                  >
                    <option value="" disabled hidden></option>
                    <option value="Project Inquiry" className="bg-[#0d0d0f] text-white">Project Inquiry</option>
                    <option value="Freelance Opportunity" className="bg-[#0d0d0f] text-white">Freelance Opportunity</option>
                    <option value="Job / Full-Time Role" className="bg-[#0d0d0f] text-white">Job / Full-Time Role</option>
                    <option value="Consulting / Advice" className="bg-[#0d0d0f] text-white">Consulting / Advice</option>
                    <option value="Other" className="bg-[#0d0d0f] text-white">Other</option>
                  </select>
                  <label
                    htmlFor="subject"
                    className="absolute left-6 top-4 text-white/40 transition-all text-sm pointer-events-none
                      peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-[#0d0d0f] peer-focus:px-2
                      peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-[#0d0d0f] peer-valid:px-2"
                  >
                    Subject
                  </label>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 peer-focus:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    disabled={status === 'sending'}
                    className="w-full bg-background/50 border border-white/10 focus:border-blue-500/70 rounded-xl px-6 py-4 text-white focus:outline-none peer placeholder-transparent transition-all resize-none shadow-[0_0_0_0_rgba(59,130,246,0)] focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] disabled:opacity-50"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-6 top-4 text-white/40 transition-all text-sm cursor-text
                      peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-[#0d0d0f] peer-focus:px-2
                      peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-[#0d0d0f] peer-valid:px-2"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:cursor-not-allowed
                    bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500
                    shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
                    text-white"
                >
                  {status === 'sending' && <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>}
                  {status === 'success' && <><CheckCircle className="w-4 h-4 text-green-300" /> Message Sent!</>}
                  {status === 'error'   && <><XCircle   className="w-4 h-4 text-red-300"   /> Failed — Try Again</>}
                  {status === 'idle'    && <><Send       className="w-4 h-4"                 /> Send Message</>}
                </motion.button>

                {/* Feedback banners */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="flex items-center gap-3 px-5 py-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      Your message was delivered to kumailr436@gmail.com. I'll reply shortly!
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="flex items-center gap-3 px-5 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
                    >
                      <XCircle className="w-4 h-4 shrink-0" />
                      {(!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY)
                        ? 'EmailJS is not configured yet. See setup instructions.'
                        : 'Something went wrong. Please email directly at kumailr436@gmail.com.'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
