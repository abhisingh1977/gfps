import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const GalleryGrid = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(images.map((img) => img.category))];
  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <motion.button key={cat} className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-custom hover:bg-primary/10'}`} onClick={() => setFilter(cat)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{cat}</motion.button>
        ))}
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((image, index) => (
            <motion.div key={image.id} className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square" layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4, delay: index * 0.05 }} onClick={() => setSelectedIndex(index)}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div><p className="text-white font-semibold text-sm">{image.alt}</p><p className="text-white/70 text-xs">{image.category}</p></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedIndex(null)}>
            <motion.div className="relative max-w-5xl max-h-[85vh] w-full" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
              <img src={filtered[selectedIndex]?.src} alt={filtered[selectedIndex]?.alt} className="w-full max-h-[80vh] object-contain rounded-lg" />
              <p className="text-white text-center mt-3">{filtered[selectedIndex]?.alt}</p>
              <button onClick={() => setSelectedIndex(null)} className="absolute -top-12 right-0 text-white hover:text-secondary cursor-pointer" aria-label="Close"><HiX size={32} /></button>
              <button onClick={(e) => { e.stopPropagation(); setSelectedIndex((p) => (p - 1 + filtered.length) % filtered.length); }} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white hover:text-secondary cursor-pointer hidden md:block" aria-label="Previous"><HiChevronLeft size={40} /></button>
              <button onClick={(e) => { e.stopPropagation(); setSelectedIndex((p) => (p + 1) % filtered.length); }} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white hover:text-secondary cursor-pointer hidden md:block" aria-label="Next"><HiChevronRight size={40} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
