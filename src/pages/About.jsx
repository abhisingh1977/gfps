import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { schoolImages, peopleImages } from '../data/images';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <PageTransition>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-dark text-white text-center px-4">
        <motion.h1 className="text-3xl md:text-5xl font-bold font-serif mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>About Us</motion.h1>
        <motion.p className="text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Home &gt; About Us</motion.p>
      </section>

      {/* School Overview */}
      <section className="section-padding bg-white" id="overview">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="School Overview" subtitle="A legacy of academic excellence and holistic development" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <img src={schoolImages.building.src} alt={schoolImages.building.alt} className="rounded-2xl shadow-xl w-full h-[350px] object-cover" loading="lazy" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="text-gray-custom leading-relaxed mb-4">Established in 1995, XYZ Public School has been a beacon of quality education for over 25 years. Affiliated with CBSE, New Delhi, the school offers education from Pre-Nursery to Class XII in a nurturing and stimulating environment.</p>
                <p className="text-gray-custom leading-relaxed mb-4">Our campus spans over 5 acres and is equipped with modern infrastructure including smart classrooms, well-equipped laboratories, a comprehensive library, sports facilities, and an auditorium. We believe in the philosophy of learning by doing and provide ample opportunities for students to explore their talents.</p>
                <p className="text-gray-custom leading-relaxed">With a dedicated team of over 100 experienced educators, we maintain a healthy student-teacher ratio to ensure personalized attention for every child. Our alumni have gone on to excel in diverse fields across the globe.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-light" id="vision-mission">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Vision & Mission" subtitle="Guiding principles that shape our educational journey" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary h-full">
                <div className="text-4xl mb-4">🔭</div>
                <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Our Vision</h3>
                <p className="text-gray-custom leading-relaxed">To be a globally recognized institution that nurtures innovative thinkers, responsible citizens, and compassionate leaders who contribute positively to society. We envision a world where every child has access to quality education that empowers them to reach their fullest potential.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-secondary h-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-dark mb-4 font-serif">Our Mission</h3>
                <ul className="text-gray-custom leading-relaxed space-y-2">
                  <li>✦ Provide a safe, inclusive, and stimulating learning environment</li>
                  <li>✦ Foster academic excellence through innovative teaching</li>
                  <li>✦ Develop critical thinking and problem-solving skills</li>
                  <li>✦ Promote physical fitness, arts, and cultural awareness</li>
                  <li>✦ Instill values of integrity, empathy, and social responsibility</li>
                  <li>✦ Prepare students for the challenges of a rapidly changing world</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3 font-serif">Our Core Values</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {['Excellence', 'Integrity', 'Innovation', 'Inclusivity', 'Compassion', 'Leadership'].map((val) => (
                  <span key={val} className="px-5 py-2 bg-white/20 rounded-full text-sm font-medium">{val}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-white" id="principal-message">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Principal's Message" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <ScrollReveal direction="left" className="lg:col-span-1">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-primary/20 mb-4">
                  <img src={peopleImages.principal.src} alt={peopleImages.principal.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-dark">Dr. Rajesh Kumar</h3>
                <p className="text-gray-custom text-sm">M.Ed., Ph.D. in Education</p>
                <p className="text-primary text-sm font-medium">Principal</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-light rounded-2xl p-6 md:p-8">
                <p className="text-gray-custom leading-relaxed mb-4 text-lg italic font-serif">&ldquo;Education is not the filling of a pail, but the lighting of a fire.&rdquo;</p>
                <p className="text-gray-custom leading-relaxed mb-4">Dear Students, Parents, and Well-wishers,</p>
                <p className="text-gray-custom leading-relaxed mb-4">It gives me immense pleasure to welcome you to XYZ Public School. As an institution dedicated to academic excellence and holistic development, we strive to create an environment where every child can discover their unique potential and grow into confident, compassionate, and competent individuals.</p>
                <p className="text-gray-custom leading-relaxed mb-4">At XYZ Public School, we believe that education extends far beyond the confines of textbooks and classrooms. Our approach integrates traditional values with modern pedagogical practices, ensuring that our students are well-prepared for the challenges and opportunities of the 21st century.</p>
                <p className="text-gray-custom leading-relaxed">I invite you to partner with us on this wonderful journey of education and self-discovery. Together, let us build a future that we can all be proud of.</p>
                <p className="text-dark font-semibold mt-4">Warm regards,<br />Dr. Rajesh Kumar</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Manager's Message */}
      <section className="section-padding bg-light" id="manager-message">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Manager's Message" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <ScrollReveal direction="left" className="lg:col-span-1">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-secondary/20 mb-4">
                  <img src={peopleImages.manager.src} alt={peopleImages.manager.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-dark">Mr. Suresh Sharma</h3>
                <p className="text-gray-custom text-sm">B.Tech., MBA</p>
                <p className="text-secondary text-sm font-medium">School Manager</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
                <p className="text-gray-custom leading-relaxed mb-4">Dear Parents and Guardians,</p>
                <p className="text-gray-custom leading-relaxed mb-4">Welcome to XYZ Public School. As the School Manager, it is my privilege to oversee an institution that has been nurturing young minds for over two decades. Our commitment to providing world-class education remains unwavering.</p>
                <p className="text-gray-custom leading-relaxed mb-4">We continuously invest in upgrading our infrastructure, training our faculty, and adopting the latest educational technologies to ensure that our students receive the best possible learning experience. Our focus on value-based education ensures that students not only excel academically but also grow as responsible citizens.</p>
                <p className="text-gray-custom leading-relaxed">I assure you that XYZ Public School will continue to set new benchmarks in educational excellence. Thank you for choosing us as your partner in your child&apos;s educational journey.</p>
                <p className="text-dark font-semibold mt-4">Best wishes,<br />Mr. Suresh Sharma</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
