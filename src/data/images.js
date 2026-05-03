// ============================================
// IMAGES CONFIGURATION
// ============================================
// All images used throughout the website are defined here.
// To change any image, simply replace the import path below
// with your new image file placed in src/assets/images/
// ============================================

import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import principal from '../assets/images/principal.png';
import manager from '../assets/images/manager.png';
import schoolBuilding from '../assets/images/school_building.png';
import galleryScienceLab from '../assets/images/gallery_science_lab.png';
import galleryLibrary from '../assets/images/gallery_library.png';
import galleryCultural from '../assets/images/gallery_cultural.png';
import galleryComputerLab from '../assets/images/gallery_computer_lab.png';
import gallerySports from '../assets/images/gallery_sports.png';
import eventAnnualDay from '../assets/images/event_annual_day.png';
import eventScienceFair from '../assets/images/event_science_fair.png';
import eventSportsDay from '../assets/images/event_sports_day.png';
import eventArtCraft from '../assets/images/event_art_craft.png';
import eventCareerWorkshop from '../assets/images/event_career_workshop.png';
import eventRepublicDay from '../assets/images/event_republic_day.png';

// ============================================
// HERO SLIDER IMAGES
// To change: replace the image files in src/assets/images/
// or update the import paths above
// ============================================
export const heroImages = [
  {
    id: 1,
    src: hero1,
    alt: 'XYZ Public School Campus',
  },
  {
    id: 2,
    src: hero2,
    alt: 'Modern Classrooms',
  },
  {
    id: 3,
    src: hero3,
    alt: 'Sports & Activities',
  },
];

// ============================================
// PEOPLE / STAFF IMAGES
// ============================================
export const peopleImages = {
  principal: {
    src: principal,
    alt: 'Dr. Rajesh Kumar - Principal',
  },
  manager: {
    src: manager,
    alt: 'Mr. Suresh Sharma - Manager',
  },
};

// ============================================
// SCHOOL IMAGES
// ============================================
export const schoolImages = {
  building: {
    src: schoolBuilding,
    alt: 'XYZ Public School Building',
  },
};

// ============================================
// GALLERY IMAGES
// To add more images: import them above and add entries here
// ============================================
export const galleryImages = [
  {
    id: 1,
    src: galleryScienceLab,
    alt: 'Science Laboratory',
    category: 'Academics',
  },
  {
    id: 2,
    src: galleryLibrary,
    alt: 'School Library',
    category: 'Facilities',
  },
  {
    id: 3,
    src: galleryCultural,
    alt: 'Annual Cultural Program',
    category: 'Events',
  },
  {
    id: 4,
    src: galleryComputerLab,
    alt: 'Computer Laboratory',
    category: 'Academics',
  },
  {
    id: 5,
    src: gallerySports,
    alt: 'Sports Day',
    category: 'Sports',
  },
  {
    id: 6,
    src: hero1,
    alt: 'School Campus',
    category: 'Campus',
  },
  {
    id: 7,
    src: hero2,
    alt: 'Classroom Learning',
    category: 'Academics',
  },
  {
    id: 8,
    src: hero3,
    alt: 'Outdoor Activities',
    category: 'Sports',
  },
];

// ============================================
// EVENT IMAGES
// To change: replace the image files in src/assets/images/
// ============================================
export const eventImages = {
  1: eventAnnualDay,
  2: eventScienceFair,
  3: eventSportsDay,
  4: eventArtCraft,
  5: eventCareerWorkshop,
  6: eventRepublicDay,
};
