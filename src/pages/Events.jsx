import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import Card from '../components/Card';
import { events } from '../data/events';
import { eventImages } from '../data/images';

const Events = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(events.map((e) => e.category))];
  const filtered = filter === 'All' ? events : events.filter((e) => e.category === filter);

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-dark text-white text-center px-4">
        <motion.h1 className="text-3xl md:text-5xl font-bold font-serif mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Events & Activities</motion.h1>
        <motion.p className="text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Home &gt; Events</motion.p>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Events" subtitle="Stay updated with school events and activities" />
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <motion.button key={cat} className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-custom hover:bg-primary/10'}`} onClick={() => setFilter(cat)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{cat}</motion.button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 0.08}>
                <Card image={eventImages[event.id]} title={event.title} description={event.description} category={event.category} date={new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}>
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-custom">
                    <span>🕐 {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="News & Announcements" subtitle="Important updates from the school" />
          <div className="max-w-3xl mx-auto space-y-4">
            {events.slice(0, 4).map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <motion.div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow" whileHover={{ x: 5 }}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      <p className="text-gray-custom text-sm mt-1">{item.description}</p>
                    </div>
                    <span className="text-xs text-gray-custom shrink-0">{new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Events;
