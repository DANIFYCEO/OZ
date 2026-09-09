import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-10 bg-oz-dark overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oz-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=625&fit=crop"
                    alt="Team collaborating"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop"
                    alt="Modern workspace"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop"
                    alt="Team meeting"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=625&fit=crop"
                    alt="Working on code"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -right-2 md:right-4 glass rounded-2xl p-5 glow-green"
            >
              <p className="text-3xl font-extrabold text-oz-green">50+</p>
              <p className="text-xs text-white/50 mt-1">Projects Delivered</p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-oz-green mb-4 block">
              About Vintage Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Engineering excellence, delivered with purpose.
            </h2>
            <p className="mt-5 text-base text-white/55 leading-relaxed">
              Vintage Solutions is more than a software company — we're a team of engineers,
              designers, and strategists who believe technology should serve
              people, not the other way around.
            </p>
            <p className="mt-4 text-base text-white/55 leading-relaxed">
              We partner with organisations across industries to design, build,
              and scale software that makes a tangible difference. From concept
              to deployment to ongoing support, we own the entire lifecycle.
            </p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: '5+', label: 'Years' },
                { value: '30+', label: 'Engineers' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
