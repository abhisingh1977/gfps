import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { programs, facilities } from '../data/academics';

const Academics = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-dark text-white text-center px-4">
        <motion.h1 className="text-3xl md:text-5xl font-bold font-serif mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Academics</motion.h1>
        <motion.p className="text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Home &gt; Academics</motion.p>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Academic Programs" subtitle="Nurturing excellence at every stage of learning" />
          <div className="space-y-6">
            {programs.map((prog, i) => (
              <ScrollReveal key={prog.id} delay={i * 0.1}>
                <motion.div className="bg-light rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-shadow" whileHover={{ x: 5 }}>
                  <div className="text-5xl shrink-0">{prog.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-dark">{prog.title}</h3>
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{prog.grades}</span>
                    </div>
                    <p className="text-gray-custom mb-4">{prog.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {prog.highlights.map((h) => (
                        <span key={h} className="bg-white text-gray-custom text-xs px-3 py-1.5 rounded-full border border-gray-200">✓ {h}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Teaching Methodology" subtitle="Innovative approaches for effective learning" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🧠', title: 'Interactive Learning', desc: 'Smart classrooms with digital boards and multimedia resources for engaging lessons.' },
              { icon: '🔬', title: 'Practical Approach', desc: 'Hands-on experiments and project-based learning for deeper understanding.' },
              { icon: '👥', title: 'Collaborative Learning', desc: 'Group projects and peer discussions to develop teamwork and communication skills.' },
              { icon: '📊', title: 'Continuous Assessment', desc: 'Regular evaluations and personalized feedback to track student progress.' },
              { icon: '🌍', title: 'Global Perspective', desc: 'Exposure to international standards and cross-cultural learning opportunities.' },
              { icon: '💡', title: 'Creative Thinking', desc: 'Encouraging innovation through creative arts, debates, and competitions.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <motion.div className="bg-white p-6 rounded-2xl shadow-md h-full" whileHover={{ y: -5 }}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-dark mb-2">{item.title}</h4>
                  <p className="text-gray-custom text-sm">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Campus Facilities" subtitle="State-of-the-art infrastructure for holistic development" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((fac, i) => (
              <ScrollReveal key={fac.id} delay={i * 0.05}>
                <motion.div className="text-center p-5 bg-light rounded-2xl hover:bg-primary hover:text-white group transition-colors duration-300" whileHover={{ y: -5, scale: 1.02 }}>
                  <div className="text-4xl mb-3">{fac.icon}</div>
                  <h4 className="font-semibold text-dark group-hover:text-white text-sm md:text-base transition-colors">{fac.name}</h4>
                  <p className="text-xs text-gray-custom group-hover:text-white/70 mt-1 transition-colors">{fac.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Academics;
