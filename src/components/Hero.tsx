import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient overlay for readability on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-[1]" />

      {/* Content */}
      <div className="relative z-10 px-5 md:px-10 w-full max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-oz-green animate-pulse-dot" />
          <span className="text-xs font-medium text-white/70">
            Building the future of software
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight"
        >
          We Build Software
          <br />
          <span className="text-gradient">That Moves the World</span>
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 md:mt-6 text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
        >
          OZ is a software solutions company delivering reliable, scalable, and
          human-centered technology for businesses that demand excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#contact"
            className="h-12 inline-flex items-center justify-center px-7 text-sm font-semibold bg-oz-green text-black rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[0.97]"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="h-12 inline-flex items-center justify-center px-7 text-sm font-medium text-white/80 border border-white/15 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
