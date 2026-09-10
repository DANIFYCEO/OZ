import { motion, useInView, useScroll, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimatedCounter = ({ from, to, duration = 2, label }: { from: number; to: number; duration?: number; label: string }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            // Check if we need to append a plus sign or percentage
            const suffix = label.includes('Uptime') ? '%' : '+';
            nodeRef.current.textContent = value.toFixed(label.includes('Uptime') ? 1 : 0) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, label]);

  return (
    <div ref={inViewRef}>
      <p ref={nodeRef} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
        {from}
      </p>
      <p className="text-xs md:text-sm text-white/40 mt-2 uppercase tracking-wider font-mono">{label}</p>
    </div>
  );
};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  // Parallax for images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 md:py-48 px-5 md:px-10 bg-oz-dark overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-oz-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm font-mono uppercase tracking-widest text-oz-green mb-5 block">
              About Vintage Solutions
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Engineering excellence, <br className="hidden md:block"/> delivered with purpose.
            </h2>
            <div className="mt-8 space-y-6 text-lg text-white/50 leading-relaxed">
              <p>
                Vintage Solutions is more than a software company — we're a collective of engineers,
                designers, and strategists who believe technology should serve
                people, not the other way around.
              </p>
              <p>
                We partner with ambitious organisations across industries to design, build,
                and scale software that makes a tangible difference. From zero-to-one concepts
                to enterprise-scale deployment, we own the entire lifecycle with uncompromising quality.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <AnimatedCounter from={0} to={5} label="Years" />
              <AnimatedCounter from={0} to={30} label="Engineers" duration={2.5} />
              <AnimatedCounter from={90} to={99.9} label="Uptime" duration={3} />
            </div>
          </motion.div>

          {/* Image collage with parallax */}
          <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] w-full">
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[65%] h-[70%] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Team collaborating"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="Working on code"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 glass rounded-2xl p-6 glow-green backdrop-blur-xl border border-white/20"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-oz-green text-center">
                <AnimatedCounter from={0} to={50} label="Projects Delivered" duration={2.5} />
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
