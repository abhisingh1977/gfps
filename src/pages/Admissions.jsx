import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

const Admissions = () => {
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

  const steps = [
    { num: '01', title: 'Collect Application From', desc: 'Download or collect the admission form from the school office.' },
    { num: '02', title: 'Submit Documents', desc: 'Submit filled form with required documents and registration fee.' },
    { num: '03', title: 'Entrance Assessment', desc: 'Student appears for age-appropriate assessment test.' },
    { num: '04', title: 'Admission Confirmation', desc: 'Upon selection, complete fee payment and enrollment.' },
  ];

  const documents = [
    'Birth Certificate (original + photocopy)',
    'Transfer Certificate from previous school',
    'Report Card / Mark Sheet of last 2 years',
    'Aadhar Card of student and parents',
    '4 Passport-size photographs of the student',
    'Address Proof (Electricity Bill / Rental Agreement)',
    'Caste Certificate (if applicable)',
    'Medical Fitness Certificate',
  ];

  const feeData = [
    { class: 'Pre-Nursery - KG', admission: '₹15,000', tuition: '₹3,500/month', annual: '₹5,000' },
    { class: 'Class I - V', admission: '₹20,000', tuition: '₹4,000/month', annual: '₹6,000' },
    { class: 'Class VI - VIII', admission: '₹25,000', tuition: '₹4,500/month', annual: '₹7,000' },
    { class: 'Class IX - X', admission: '₹30,000', tuition: '₹5,000/month', annual: '₹8,000' },
    { class: 'Class XI - XII', admission: '₹35,000', tuition: '₹5,500/month', annual: '₹10,000' },
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-dark text-white text-center px-4">
        <motion.h1 className="text-3xl md:text-5xl font-bold font-serif mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Admissions</motion.h1>
        <motion.p className="text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Home &gt; Admissions</motion.p>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-white" id="process">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Admission Process" subtitle="Simple and transparent admission procedure" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <motion.div className="relative bg-light p-6 rounded-2xl text-center h-full" whileHover={{ y: -5 }}>
                  <div className="text-4xl font-bold text-primary/20 mb-2">{step.num}</div>
                  <h4 className="text-lg font-bold text-dark mb-2">{step.title}</h4>
                  <p className="text-gray-custom text-sm">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-primary text-2xl">→</div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/downloads">
              <motion.button className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-full transition-colors cursor-pointer" whileHover={{ scale: 1.05 }}>Download Admission Form</motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-light" id="documents">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Required Documents" subtitle="Please keep these documents ready" />
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
                <ul className="space-y-3">
                  {documents.map((doc, i) => (
                    <motion.li key={i} className="flex items-start gap-3 text-gray-custom" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0 text-sm mt-0.5">✓</span>
                      <span>{doc}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-white" id="fee-structure">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Fee Structure" subtitle="Transparent and affordable fee structure for 2025-26" />
          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 font-semibold">Class</th>
                    <th className="px-6 py-4 font-semibold">Admission Fee</th>
                    <th className="px-6 py-4 font-semibold">Tuition Fee</th>
                    <th className="px-6 py-4 font-semibold">Annual Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-light' : 'bg-white'} hover:bg-primary/5 transition-colors`}>
                      <td className="px-6 py-4 font-medium text-dark">{row.class}</td>
                      <td className="px-6 py-4 text-gray-custom">{row.admission}</td>
                      <td className="px-6 py-4 text-gray-custom">{row.tuition}</td>
                      <td className="px-6 py-4 text-gray-custom">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-custom mt-4 text-center">* Fee structure is subject to revision. Transport and other optional charges are additional.</p>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default Admissions;
