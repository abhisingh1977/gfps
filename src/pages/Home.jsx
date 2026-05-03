import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import Card from '../components/Card';
import PageTransition from '../components/PageTransition';
import { schoolImages, peopleImages, galleryImages } from '../data/images';
import { programs, facilities } from '../data/academics';
import { contactInfo } from '../data/navigation';

const Home = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <HeroSlider />

      {/* About Preview */}
      <section className="section-padding bg-white" id="about-preview">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="About Our School" subtitle="Nurturing young minds for a brighter tomorrow" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={schoolImages.building.src} alt={schoolImages.building.alt} className="w-full h-[300px] md:h-[400px] object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 font-serif">Excellence in Education Since 1995</h3>
                <p className="text-gray-custom leading-relaxed mb-4">XYZ Public School is a premier educational institution committed to providing holistic education. We nurture young minds with a perfect blend of academic excellence, character building, and extracurricular activities.</p>
                <p className="text-gray-custom leading-relaxed mb-6">Our state-of-the-art infrastructure, experienced faculty, and innovative teaching methodologies ensure that every student reaches their full potential.</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[{ num: '25+', label: 'Years of Excellence' }, { num: '2000+', label: 'Students' }, { num: '100+', label: 'Expert Faculty' }, { num: '50+', label: 'Awards Won' }].map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-light rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-primary">{stat.num}</div>
                      <div className="text-xs text-gray-custom mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <motion.button className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-colors cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Learn More →</motion.button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Academics Overview */}
      <section className="section-padding bg-light" id="academics-preview">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Programs" subtitle="Comprehensive education from Pre-Primary to Senior Secondary" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 3).map((prog, i) => (
              <ScrollReveal key={prog.id} delay={i * 0.1}>
                <Card icon={prog.icon} title={prog.title} description={prog.description}>
                  <p className="text-xs text-primary font-semibold mt-2">{prog.grades}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/academics">
              <motion.button className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>View All Programs →</motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-white" id="facilities">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Facilities" subtitle="World-class infrastructure for holistic development" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((fac, i) => (
              <ScrollReveal key={fac.id} delay={i * 0.05}>
                <motion.div className="text-center p-5 md:p-6 bg-light rounded-2xl hover:bg-primary hover:text-white group transition-colors duration-300 cursor-pointer" whileHover={{ y: -5 }}>
                  <div className="text-3xl md:text-4xl mb-3">{fac.icon}</div>
                  <h4 className="font-semibold text-sm md:text-base text-dark group-hover:text-white transition-colors">{fac.name}</h4>
                  <p className="text-xs text-gray-custom group-hover:text-white/70 mt-1 transition-colors">{fac.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message Preview */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-dark text-white" id="principal-preview">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img src={peopleImages.principal.src} alt={peopleImages.principal.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="text-secondary font-semibold text-sm tracking-wide">PRINCIPAL&apos;S MESSAGE</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 font-serif">&ldquo;Education is the passport to the future&rdquo;</h3>
                <p className="text-white/80 leading-relaxed mb-4">Dear Students and Parents, at XYZ Public School, we believe that education goes beyond textbooks. Our mission is to develop well-rounded individuals who are prepared to face the challenges of tomorrow with confidence and integrity.</p>
                <p className="font-semibold">Dr. Rajesh Kumar</p>
                <p className="text-white/60 text-sm">Principal, XYZ Public School</p>
                <Link to="/about#principal-message">
                  <motion.button className="mt-4 px-6 py-2.5 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-full transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>Read Full Message →</motion.button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>



      {/* Gallery Preview */}
      <section className="section-padding bg-light" id="gallery-preview">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Photo Gallery" subtitle="Glimpses of life at XYZ Public School" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.slice(0, 6).map((img, i) => (
              <ScrollReveal key={img.id} delay={i * 0.05}>
                <div className="relative overflow-hidden rounded-xl group aspect-square cursor-pointer">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">View</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery"><motion.button className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>View Full Gallery →</motion.button></Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-light to-primary-dark text-white" id="contact-preview">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="Get In Touch" subtitle="We'd love to hear from you" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: '📍', label: 'Address', value: contactInfo.address },
              { icon: '📞', label: 'Phone', value: contactInfo.phone },
              { icon: '✉️', label: 'Email', value: contactInfo.email },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold mb-1">{item.label}</h4>
                  <p className="text-white/70 text-sm">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contact"><motion.button className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-full transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>Contact Us →</motion.button></Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
