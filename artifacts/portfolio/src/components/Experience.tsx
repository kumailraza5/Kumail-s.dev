import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2024 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Freelance Full Stack Developer (LinkedIn Clients)',
    description: 'Leading a team of 4 developers to build enterprise SaaS products using Next.js and Supabase. Improved application performance by 40%.'
  },

  {
    year: '2023 - 2024',
    title: 'Backend Java Developer',
    company: 'Fiesta Consultants',
    description: 'Designed and implemented RESTful APIs using Java Spring Boot, Hibernate and  handled database optimization and server deployment.'
  },
  {
    year: '2022 - 2023',
    title: 'Wordpress Developer',
    company: 'Self-Employed',
    description: 'Built custom apps for Learning , integrating Firebase for simple backend solutions and authentication.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-indigo-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-[7px] md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />

                {/* Content */}
                <motion.div
                  className={`ml-8 md:ml-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider">
                      {exp.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-white/50 font-medium mb-4">{exp.company}</h4>
                    <p className="text-white/70 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
