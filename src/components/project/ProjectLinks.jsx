import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, BookOpen } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * ProjectLinks Component
 *
 * Displays contextual action links based on project type (design vs. development).
 *
 * Props:
 * - project {Object} - Project data containing type and relevant URLs:
 *   - type {string} - 'design' or 'development'
 *   - For development: github, demo URLs
 *   - For design: prototype, caseStudyUrl
 *
 * Conditional Rendering Strategy:
 * 1. Development Projects:
 *    - Shows "Code" link to GitHub repository
 *    - Shows "Demo" link to live application
 *    - Why? Developers want to see code and working demo
 *
 * 2. Design Projects:
 *    - Shows "Case Study" link to external portfolio (Behance, etc.)
 *    - Shows "View Prototype" link to Figma prototype
 *    - Why? Designers need to show detailed process and visual iterations
 *
 * Icon Usage:
 * - Github icon for code/repository
 * - ExternalLink icon for demos and prototypes
 * - FileText icon for case studies
 * Why? Icons improve scannability and communicate link purpose at a glance
 *
 * Hover Animations:
 * - whileHover: scale 1.1 (10% enlargement)
 * - whileHover: rotateZ (5 or -5 degrees for variation)
 * - whileTap: scale 0.95 (shrinks on click for tactile feedback)
 * Why? Provides interactive feedback showing links are clickable
 *
 * Styling:
 * - Flex layout with gap-4 for spacing between links
 * - Icon size 18px (visible but not overwhelming)
 * - Text color gray-600 default, blue-600 on hover
 * - Dark mode: gray-400 default, blue-400 on hover
 * - Flex items-center gap-2 aligns icon and text horizontally
 *
 * Link Attributes:
 * - target="_blank" opens links in new tab
 * - rel="noopener noreferrer" prevents security vulnerabilities
 * Why? Users expect external links to open in new tabs, maintaining page state
 * rel attributes prevent window.opener exploitation
 *
 * Performance:
 * - Uses motion.a for animation (semantic HTML)
 * - Only renders relevant links per project type
 * - Minimal DOM elements (no unnecessary containers)
 *
 * Accessibility:
 * - Icon + text combination provides clarity
 * - Proper link semantics
 * - Hover states are visible
 * - Color + icon (not color alone) conveys meaning
 *
 * Maintainability:
 * - project.type controls behavior (single source of truth)
 * - Easy to add new link types (modify conditional)
 * - Icon and link pairs are consistent
 */
function ProjectLinks({ project }) {
  if (project.type === 'development') {
    return (
      <div className="flex gap-4">
        {/* GitHub link */}
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

        {/* Demo link */}
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
            <FileText size={18} />
            <span>Case Study</span>
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