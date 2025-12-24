import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * ProjectTags Component
 *
 * Displays an array of skill tags as styled badges.
 *
 * Props:
 * - tags {Array<string>} - Array of skill/technology tags
 *
 * Features:
 * - Flexbox layout wraps tags responsively
 * - Each tag is a separate motion component
 * - Subtle scale animation on hover
 * - Themed colors (blue background, blue text)
 * - Dark mode support
 *
 * Styling:
 * - Blue background (bg-blue-100 light, bg-blue-900/30 dark)
 * - Blue text (text-blue-600 light, text-blue-400 dark)
 * - Rounded pills (rounded-full) for modern look
 * - Small padding (px-3 py-1) keeps tags compact
 * - gap-2 provides consistent spacing between tags
 * - Wraps on mobile using flex-wrap
 *
 * Hover Animation:
 * - whileHover={{ scale: 1.1 }} enlarges tag 10%
 * Why? Provides interactive feedback, indicates clickability
 * Though tags aren't clickable, animation shows they're UI elements
 *
 * Rendering Strategy:
 * - Uses .map() with index as key
 * - Each tag gets unique motion component
 * Why? Allows future animations per-tag if needed
 * Current approach is simple but extensible
 *
 * Data Flow:
 * - ProjectCard passes array of tags
 * - ProjectTags renders without filtering/sorting
 * - Order from data is preserved
 * Why? Card specifies importance/order of tags
 *
 * Accessibility:
 * - Semantic span elements
 * - Text is readable and clear
 * - Color not sole indicator (text itself communicates)
 * - Sufficient size for visibility (text-sm is 14px)
 *
 * Performance:
 * - Lightweight component
 * - Minimal CSS (Tailwind utilities)
 * - No expensive computations
 * - Renders quickly regardless of tag count
 *
 * Use Cases:
 * - Skills used in project
 * - Technologies employed
 * - Project categories or types
 * - Any label array that needs visual presentation
 */
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