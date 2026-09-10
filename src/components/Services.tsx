import { motion, useInView, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cloud, Shield, Smartphone, BarChart3, Cpu } from 'lucide-react';

const SERVICES = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end development of bespoke applications tailored to your business processes and goals.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure cloud architecture designed for high availability and peak performance.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile experiences that your users will love, built for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security audits, penetration testing, and continuous monitoring to protect your assets.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Turn raw data into actionable insights with modern data pipelines, dashboards, and ML models.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions that streamline operations and unlock new efficiencies across your organisation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
];

const ServiceCard = ({ service, index }: { service: (typeof SERVICES)[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  // Mouse tracking gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // For Tilt
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // For Glow
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl bg-oz-card border border-white/5 transition-colors duration-500 hover:border-white/10"
    >
      {/* Dynamic Hover Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 210, 106, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative h-48 overflow-hidden rounded-t-2xl">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oz-card via-oz-card/40 to-transparent" />
        
        {/* Floating Icon */}
        <div style={{ transform: "translateZ(40px)" }} className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:border-oz-green/40 group-hover:bg-oz-green/10">
          <Icon className="w-6 h-6 text-white group-hover:text-oz-green transition-colors" />
        </div>
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-oz-green transition-colors duration-300">{service.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-32 md:py-40 px-5 md:px-10 bg-black perspective-[2000px]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-mono uppercase tracking-widest text-oz-green mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            World-class engineering for complex problems.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
