import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectLinks({ project }) {
  if (project.type === 'development') {
    return (
      <div className="flex gap-4">
        <motion.a 
          href={project.github}
          target='_blank'
          rel="nooopener noreferrer" 
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={18} />
          <span>Code</span>
        </motion.a>
        <motion.a 
          href={project.demo}
          target='_blank'
          rel="nooopener noreferrer" 
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          whileHover={{ scale: 1.1, rotateZ: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={18} />
          <span>Demo</span>
        </motion.a>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {project.id === 'lingua-quest' ? (
        <motion.a 
          href="https://app.uxcel.com/showcase/linguaquest-866?utm_source=share-brief-project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          whileHover={{ scale: 1.1, rotateZ: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <BookOpen size={18} />
          <span>UXcel</span>
        </motion.a>
      ) : (
        <motion.div whileHover={{ scale: 1.1, rotateZ: 5 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to={`/case-study/${project.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <FileText size={18} />
            <span>Case Study</span>
          </Link>
        </motion.div>
      )}
      <motion.a 
        href={project.prototype}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        whileHover={{ scale: 1.1, rotateZ: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ExternalLink size={18} />
        <span>View Prototype</span>
      </motion.a>
    </div>
  );
}

ProjectLinks.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
    prototype: PropTypes.string
  }).isRequired
};

export default ProjectLinks;