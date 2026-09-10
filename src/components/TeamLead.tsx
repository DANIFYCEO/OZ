import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const TeamLead = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const floatY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateFloat = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const quoteText = "At Vintage Solutions, we don't just write code — we engineer trust. Every line we ship is a promise that someone's business, someone's livelihood, can depend on what we build. That responsibility is what drives us to be exceptional every single day.";
  const words = quoteText.split(" ");

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-32 md:py-48 px-5 md:px-10 bg-black overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oz-green/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oz-green/20 to-transparent" />

      {/* Abstract background blobs */}
      <motion.div 
        style={{ y: floatY, rotate: rotateFloat }}
        className="absolute top-20 right-[-10%] w-96 h-96 bg-oz-green/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="text-sm font-mono uppercase tracking-widest text-oz-green mb-4 block">
            Leadership Perspective
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            A word from our leader.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">
          {/* Portrait with parallax float */}
          <motion.div
            style={{ y: floatY }}
            className="lg:col-span-2 flex justify-center perspective-[1000px]"
          >
            <motion.div 
              initial={{ opacity: 0, rotateY: -30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-oz-green/30 glow-green bg-oz-card flex items-center justify-center shadow-2xl shadow-oz-green/20">
                <span className="text-7xl md:text-8xl font-extrabold text-oz-green/40 select-none bg-gradient-to-br from-oz-green to-oz-green-dark bg-clip-text text-transparent">
                  DO
                </span>
              </div>
              
              {/* Floating Name card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-8 py-4 text-center whitespace-nowrap border border-white/10 shadow-xl"
              >
                <p className="text-lg font-bold text-white mb-1">David Osas</p>
                <p className="text-xs text-oz-green font-mono uppercase tracking-wider">
                  Team Lead
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quote with Word Reveal */}
          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Quote className="w-12 h-12 text-oz-green/40 mb-8" />
            </motion.div>

            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug flex flex-wrap gap-x-2 gap-y-2">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.03 }}
                >
                  {word}
                </motion.span>
              ))}
            </blockquote>

            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "100%" } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-oz-green/40 to-transparent" />
              <span className="text-sm font-mono text-white/40 uppercase tracking-widest shrink-0">
                David Osas
              </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.8 }}
              className="mt-8 text-base text-white/50 leading-relaxed max-w-xl"
            >
              David leads our engineering team with an obsessive focus on
              craftsmanship, reliability, and genuine human impact. Under his
              leadership, Vintage Solutions has delivered over 50 projects across fintech,
              healthtech, and enterprise SaaS — each one built to scale and built to last.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLead;
