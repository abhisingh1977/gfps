import ScrollReveal from './ScrollReveal';

const SectionHeading = ({ title, subtitle, light = false, className = '' }) => {
  return (
    <ScrollReveal className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4 ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="h-[2px] w-8 bg-secondary rounded-full"></span>
        <span className="h-[3px] w-16 bg-primary-light rounded-full"></span>
        <span className="h-[2px] w-8 bg-secondary rounded-full"></span>
      </div>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-custom'}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
};

export default SectionHeading;
