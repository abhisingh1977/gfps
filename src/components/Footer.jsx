import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { socialLinks, contactInfo } from '../data/navigation';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const usefulLinks = [
    { name: 'Downloads', path: '/downloads' },
    { name: 'Events', path: '/events' },
    { name: 'Fee Structure', path: '/admissions#fee-structure' },
    { name: 'School Brochure', path: '/downloads' },
  ];

  const socialIcons = [
    { icon: FaFacebookF, url: socialLinks.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaInstagram, url: socialLinks.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaYoutube, url: socialLinks.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: FaTwitter, url: socialLinks.twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaWhatsapp, url: socialLinks.whatsapp, label: 'WhatsApp', color: 'hover:bg-green-600' },
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-lg">
                XYZ
              </div>
              <div>
                <h3 className="text-lg font-bold">XYZ Public School</h3>
                <p className="text-xs text-gray-400">Build Your Future with us</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nurturing young minds since 1995. We are committed to providing quality education 
              and holistic development to every student.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, url, label, color }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${color}`}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-[3px] bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-secondary text-xs">▸</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative">
              Useful Links
              <span className="absolute -bottom-1 left-0 w-10 h-[3px] bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-secondary text-xs">▸</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-[3px] bg-secondary rounded-full"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
                <p className="text-gray-400 text-sm">{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-secondary shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 text-sm hover:text-secondary transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-secondary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 text-sm hover:text-secondary transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-secondary shrink-0" />
                <p className="text-gray-400 text-sm">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} XYZ Public School. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Designed with ❤️ for Quality Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
