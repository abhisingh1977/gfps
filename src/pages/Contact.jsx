import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { contactInfo } from '../data/navigation';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future: send to backend API
    console.log('Form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactItems = [
    { icon: FaMapMarkerAlt, label: 'Address', value: contactInfo.address },
    { icon: FaPhone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: FaEnvelope, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: FaClock, label: 'Office Hours', value: contactInfo.hours },
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-dark text-white text-center px-4">
        <motion.h1 className="text-3xl md:text-5xl font-bold font-serif mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Contact Us</motion.h1>
        <motion.p className="text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Home &gt; Contact Us</motion.p>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Get In Touch" subtitle="We'd love to hear from you. Reach out to us anytime!" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-light rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="text-primary text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark text-sm">{label}</h4>
                      {href ? (
                        <a href={href} className="text-gray-custom text-sm hover:text-primary transition-colors">{value}</a>
                      ) : (
                        <p className="text-gray-custom text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-light rounded-2xl p-6 md:p-8" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">Full Name *</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email *</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">Phone</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark mb-1">Subject *</label>
                    <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="Enquiry about..." />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">Message *</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none" placeholder="Write your message here..." />
                </div>
                <motion.button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-colors cursor-pointer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} id="contact-submit">
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>
                {submitted && <p className="text-accent text-sm mt-3">Thank you! We will get back to you soon.</p>}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full">
        <ScrollReveal>
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </ScrollReveal>
      </section>
    </PageTransition>
  );
};

export default Contact;
