import { motion } from 'framer-motion';

const TECHNOLOGIES = [
  "React", "TypeScript", "Node.js", "Python", "Go", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis", "Next.js", "GraphQL", "Tailwind CSS", "Framer Motion", "TensorFlow", "OpenAI"
];

const TechStack = () => {
  return (
    <section className="relative py-20 bg-black border-y border-white/5 overflow-hidden">
      {/* Edge Gradients for smooth fade */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-white/40">
          Powered by industry-leading technology
        </span>
      </div>

      <div className="flex w-[200vw]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 shrink-0"
          style={{ width: "fit-content" }}
        >
          {/* Double the array for seamless looping */}
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
            <div key={`${tech}-${idx}`} className="flex items-center gap-3 group shrink-0">
              <span className="text-2xl md:text-3xl font-extrabold text-white/10 group-hover:text-oz-green transition-colors duration-500 select-none">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
