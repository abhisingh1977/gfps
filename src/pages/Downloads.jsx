import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import DownloadList from '../components/DownloadList';
import { downloads } from '../data/downloads';

const Downloads = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-dark text-white text-center px-4">
        <motion.h1 className="text-3xl md:text-5xl font-bold font-serif mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Downloads</motion.h1>
        <motion.p className="text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Home &gt; Downloads</motion.p>
      </section>

      <section className="section-padding bg-light">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Download Center" subtitle="Access important school documents and forms" />
          <DownloadList downloads={downloads} />
          <p className="text-center text-gray-custom text-xs mt-8">
            If you are unable to download any document, please contact the school office.
          </p>
        </div>
      </section>
    </PageTransition>
  );
};

export default Downloads;
