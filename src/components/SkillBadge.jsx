import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * SkillBadge Component
 *
 * Individual skill display with logo and label.
 *
 * Props:
 * - skill {string} - Skill name (used to find logo and as label)
 *
 * Features:
 * - Logo image with hover scale animation
 * - Skill name label below logo
 * - 3D rotation on hover (rotateX, rotateY)
 * - Entrance animation when scrolling into view
 * - Dark mode support with proper contrasts
 *
 * Logo Loading:
 * - Constructs image path from skill name
 * - Example: "React" → "/logos/react.svg"
 * - Converts to kebab-case: "Node JS" → "node-js.svg"
 * Why? Keeps logo filenames consistent without explicit mapping
 * Maintains single source of truth (data) while deriving paths
 *
 * 3D Animation:
 * - whileHover applies rotateX, rotateY, scale transforms
 * - transformStyle: 'preserve-3d' enables 3D perspective
 * - Subtle 10-degree rotations create tilt effect
 * Why? Premium feel without being overwhelming
 * Rotation direction matches viewer's attention
 *
 * Logo Animation:
 * - Inner image scales up on hover (scale 1.1)
 * Why? Draws attention to logo, indicates interactivity
 *
 * Entrance Animation:
 * - initial={{ opacity: 0, y: 20 }} starts invisible below
 * - whileInView animates when scrolling into view
 * - viewport={{ once: true }} prevents re-animation on scroll
 * Why? Smooth reveal effect improves perceived performance
 * Only animates once to avoid distraction
 *
 * Layout:
 * - Fixed size (w-16 h-16) ensures consistent spacing
 * - Flex column layout centers logo and label
 * - gap-4 provides breathing room between elements
 *
 * Styling:
 * - White background with subtle shadow creates elevation
 * - Hover increases shadow for depth
 * - Dark mode: dark:bg-gray-800 for readability
 * - Text color adjusts for both themes
 * - Rounded corners (rounded-xl) for modern look
 *
 * Accessibility:
 * - Image has alt text for screen readers
 * - Text label is semantic, not hidden behind image
 * - Color contrast sufficient in both themes
 * - Hover state visually apparent
 */
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