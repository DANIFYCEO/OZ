import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cloud, Shield, Smartphone, BarChart3, Cpu } from 'lucide-react';

const SERVICES = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'End-to-end development of bespoke applications tailored to your business processes and goals.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Scalable, secure cloud architecture designed for high availability and peak performance.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Native and cross-platform mobile experiences that your users will love, built for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Enterprise-grade security audits, penetration testing, and continuous monitoring to protect your assets.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description:
      'Turn raw data into actionable insights with modern data pipelines, dashboards, and ML models.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description:
      'Intelligent automation solutions that streamline operations and unlock new efficiencies across your organisation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative rounded-2xl overflow-hidden bg-oz-card border border-oz-border hover:border-oz-green/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oz-card via-oz-card/30 to-transparent" />
        {/* Icon badge */}
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-oz-green/10 border border-oz-green/20 flex items-center justify-center backdrop-blur-sm">
          <Icon className="w-5 h-5 text-oz-green" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 px-5 md:px-10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-oz-green mb-3 block">
            What we do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Solutions built for the real world.
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-lg leading-relaxed">
            From startups to enterprises, we deliver software that solves
            genuine problems with precision and care.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
