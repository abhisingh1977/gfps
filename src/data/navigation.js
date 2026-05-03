// ============================================
// NAVIGATION DATA
// ============================================

export const navigation = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '/about',
    children: [
      { name: 'School Overview', path: '/about#overview' },
      { name: 'Vision & Mission', path: '/about#vision-mission' },
      { name: "Principal's Message", path: '/about#principal-message' },
      { name: "Manager's Message", path: '/about#manager-message' },
    ],
  },
  { name: 'Academics', path: '/academics' },
  {
    name: 'Admissions',
    path: '/admissions',
    children: [
      { name: 'Admission Process', path: '/admissions#process' },
      { name: 'Required Documents', path: '/admissions#documents' },
      { name: 'Fee Structure', path: '/admissions#fee-structure' },
    ],
  },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Downloads', path: '/downloads' },
  { name: 'Contact Us', path: '/contact' },
];

export const socialLinks = {
  facebook: 'https://facebook.com/xyzpublicschool',
  instagram: 'https://instagram.com/xyzpublicschool',
  youtube: 'https://youtube.com/xyzpublicschool',
  twitter: 'https://twitter.com/xyzpublicschool',
  whatsapp: 'https://wa.me/919876543210',
};

export const contactInfo = {
  address: '123 Education Lane, Knowledge City, State - 110001',
  phone: '+91 98765 43210',
  email: 'info@xyzpublicschool.edu.in',
  hours: 'Monday - Saturday: 8:00 AM - 3:00 PM',
};
