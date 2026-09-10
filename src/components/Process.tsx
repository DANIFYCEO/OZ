import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business objectives, technical constraints, and market landscape to define a clear, actionable roadmap. No assumptions, just data-driven planning.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description: "Our system architects design scalable, secure foundations while our UX team crafts intuitive interfaces. We build prototypes to validate concepts early.",
  },
  {
    number: "03",
    title: "Engineering",
    description: "Agile sprints, rigorous code reviews, and automated testing. We build robust software using modern tech stacks, keeping you in the loop at every milestone.",
  },
  {
    number: "04",
    title: "Deployment & Scaling",
    description: "Zero-downtime deployments, comprehensive monitoring, and continuous integration. We don't just launch; we ensure your platform scales gracefully under load.",
  }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section 
      id="process"
      ref={containerRef}
      className="relative py-32 md:py-48 px-5 md:px-10 bg-oz-dark"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <span className="text-sm font-mono uppercase tracking-widest text-oz-green mb-4 block">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            How we build the future.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Progress Line Background */}
          <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-px bg-white/10" />
          
          {/* Animated Vertical Progress Line */}
          <motion.div 
            className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-px bg-oz-green origin-top"
            style={{ scaleY: smoothProgress }}
          />

          <div className="space-y-24 md:space-y-32">
            {STEPS.map((step) => (
              <div key={step.number} className="relative flex gap-8 md:gap-16 group">
                
                {/* Number Circle */}
                <div className="relative z-10 shrink-0">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-oz-dark border-2 border-white/10 flex items-center justify-center transition-colors duration-500 group-hover:border-oz-green">
                    <span className="text-xl md:text-2xl font-mono font-bold text-white/50 group-hover:text-oz-green transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="pt-2 md:pt-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
