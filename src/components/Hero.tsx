import { motion, useScroll, useTransform } from 'framer-motion';
import Scene3D from './Scene3D';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Framer motion variants for text reveal
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVars = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-[1]" />

      {/* Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 px-5 md:px-10 w-full max-w-5xl mx-auto text-center"
      >
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status badge */}
          <motion.div
            variants={wordVars}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-oz-green animate-pulse-dot" />
            <span className="text-xs font-medium text-white/70">
              Building the future of software
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight perspective-[1000px]">
            <div className="overflow-hidden pb-2">
              <motion.div variants={wordVars}>We Build Software</motion.div>
            </div>
            <div className="overflow-hidden pt-1 pb-4">
              <motion.div variants={wordVars} className="text-gradient inline-block">
                That Moves the World
              </motion.div>
            </div>
          </h1>

          {/* Sub copy */}
          <motion.p
            variants={wordVars}
            className="mt-4 md:mt-6 text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            Vintage Solutions is a premium software agency delivering reliable, scalable, and
            human-centered technology for forward-thinking businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={wordVars}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="h-14 inline-flex items-center justify-center px-8 text-base font-semibold bg-oz-green text-black rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[0.97]"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="h-14 inline-flex items-center justify-center px-8 text-base font-medium text-white/80 border border-white/15 rounded-full hover:border-white/30 hover:text-white transition-all duration-300 hover:bg-white/5"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
