import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const TeamLead = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-24 md:py-36 px-5 md:px-10 bg-black overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oz-green/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oz-green/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-oz-green mb-3 block">
            From the Team Lead
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            A word from our leader.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-oz-green/20 glow-green bg-oz-card flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-extrabold text-oz-green/60 select-none">
                  DO
                </span>
              </div>
              {/* Name card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl px-5 py-2.5 text-center whitespace-nowrap"
              >
                <p className="text-sm font-bold text-white">David Osas</p>
                <p className="text-[11px] text-oz-green font-medium">
                  Team Lead
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <Quote className="w-10 h-10 text-oz-green/30 mb-6" />

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed">
              "At Vintage Solutions, we don't just write code — we engineer trust. Every line
              we ship is a promise that someone's business, someone's livelihood,
              can depend on what we build. That responsibility is what drives us
              to be exceptional every single day."
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-oz-green/30 to-transparent" />
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                David Osas
              </span>
            </div>

            <p className="mt-6 text-sm text-white/40 leading-relaxed max-w-lg">
              David leads our engineering team with a focus on
              craftsmanship, reliability, and genuine human impact. Under his
              leadership, Vintage Solutions has delivered over 50 projects across fintech,
              healthtech, and enterprise SaaS — each one built to last.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamLead;
