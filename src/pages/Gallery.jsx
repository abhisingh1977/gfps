import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import { galleryImages } from '../data/images';

const Gallery = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-dark text-white text-center px-4">
        <motion.h1 className="text-3xl md:text-5xl font-bold font-serif mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Photo Gallery</motion.h1>
        <motion.p className="text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Home &gt; Gallery</motion.p>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Gallery" subtitle="Glimpses of life at XYZ Public School" />
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </PageTransition>
  );
};

export default Gallery;
