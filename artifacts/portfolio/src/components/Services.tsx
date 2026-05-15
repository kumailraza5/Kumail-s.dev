import { motion } from 'framer-motion';
import { Layers, Database, Smartphone, Shield, Zap, Layout } from 'lucide-react';

const services = [
  {
    title: 'Full Stack Web Apps',
    description: 'End-to-end web applications built with modern architectures, focusing on performance and scalability.',
    icon: Layers,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'REST APIs & GraphQL',
    description: 'Robust backend systems and APIs designed for speed, security, and seamless frontend integration.',
    icon: Database,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Firebase/Supabase Integration',
    description: 'Real-time databases, authentication, and serverless functions for rapid feature development.',
    icon: Zap,
    color: 'from-orange-400 to-red-500'
  },
  {
    title: 'Authentication Systems',
    description: 'Secure user onboarding, OAuth providers, JWT handling, and role-based access control.',
    icon: Shield,
    color: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Admin Dashboards',
    description: 'Complex data visualization, CMS portals, and internal tools with intuitive UX.',
    icon: Layout,
    color: 'from-indigo-400 to-purple-600'
  },
  {
    title: 'Responsive Frontends',
    description: 'Pixel-perfect, accessible, and cinematic user interfaces that work flawlessly across all devices.',
    icon: Smartphone,
    color: 'from-blue-400 to-indigo-500'
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">What I Do</h2>
          <p className="text-lg text-white/60 font-light">
            I build comprehensive digital solutions, taking concepts from raw ideas to production-ready platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-colors"
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.color} transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
