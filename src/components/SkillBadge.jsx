import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function SkillBadge({ skill }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={{ 
        rotateX: 10,
        rotateY: 10,
        scale: 1.05
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <img 
          src={`/logos/${skill.toLowerCase().replace(/\s+/g, '-')}.svg`} 
          alt={`${skill} logo`}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-gray-700 dark:text-gray-300 font-medium text-center">
        {skill}
      </span>
    </motion.div>
  );
}

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired
};

export default SkillBadge;