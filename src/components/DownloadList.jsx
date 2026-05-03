import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { FaFileAlt, FaMoneyBillWave, FaBook, FaCalendarAlt, FaTshirt, FaBus } from 'react-icons/fa';

const iconMap = {
  fee: FaMoneyBillWave,
  form: FaFileAlt,
  brochure: FaBook,
  calendar: FaCalendarAlt,
  uniform: FaTshirt,
  transport: FaBus,
};

const DownloadList = ({ downloads }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {downloads.map((item, index) => {
        const Icon = iconMap[item.icon] || FaFileAlt;
        return (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon className="text-xl text-primary group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-dark text-sm md:text-base">{item.title}</h4>
              <p className="text-gray-custom text-xs md:text-sm">{item.description}</p>
            </div>
            <div className="shrink-0 text-gray-400 group-hover:text-secondary transition-colors">
              <HiDownload size={22} />
            </div>
          </motion.a>
        );
      })}
    </div>
  );
};

export default DownloadList;
