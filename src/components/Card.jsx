import { motion } from 'framer-motion';

const Card = ({ 
  image, 
  title, 
  description, 
  icon, 
  date, 
  category, 
  children, 
  className = '',
  onClick 
}) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer ${className}`}
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {image && (
        <div className="relative overflow-hidden h-48 md:h-52">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {category && (
            <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          )}
          {date && (
            <span className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {date}
            </span>
          )}
        </div>
      )}
      <div className="p-5 md:p-6">
        {icon && (
          <div className="text-4xl mb-3">{icon}</div>
        )}
        <h3 className="text-lg md:text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-custom text-sm md:text-base leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
