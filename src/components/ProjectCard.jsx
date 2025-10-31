import { motion } from 'framer-motion';
import ProjectLinks from './project/ProjectLinks';
import ProjectTags from './project/ProjectTags';
import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
        translateZ: 10
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 transform-gpu" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3> 
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <ProjectTags tags={project.tags} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
    caseStudy: PropTypes.string,
    prototype: PropTypes.string
  }).isRequired
};

export default ProjectCard;