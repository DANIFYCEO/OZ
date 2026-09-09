import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch('https://formsubmit.co/ajax/hello@vintagesolutions.dev', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-10 bg-oz-dark overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-oz-green mb-4 block">
              Get in touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Let's build something extraordinary together.
            </h2>
            <p className="mt-5 text-base text-white/50 leading-relaxed">
              Whether you're looking to launch a new product, modernise legacy
              systems, or scale your infrastructure, we're ready to help.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { label: 'Email', value: 'hello@vintagesolutions.dev', href: 'mailto:hello@vintagesolutions.dev' },
                { label: 'Location', value: 'Lagos, Nigeria', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-oz-green/10 border border-oz-green/20 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-oz-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/30 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div className="glass rounded-2xl p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-oz-green/10 border border-oz-green/20 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-oz-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message sent!
                </h3>
                <p className="text-sm text-white/50">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 md:p-8 space-y-5"
              >
                {/* Honeypot for spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-oz-green/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-oz-green/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 uppercase tracking-wider mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-oz-green/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-oz-green text-black font-semibold rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
