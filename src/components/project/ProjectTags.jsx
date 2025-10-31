import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function ProjectTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <motion.span 
          key={index}
          className="px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

ProjectTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProjectTags;