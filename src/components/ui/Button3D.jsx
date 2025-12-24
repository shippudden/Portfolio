import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Button3D Component
 *
 * A reusable CTA button with 3D hover effects and two visual variants.
 *
 * Props:
 * - href {string} - Link destination (required)
 * - variant {string} - 'primary' or 'secondary' (default: 'primary')
 * - children {ReactNode} - Button label text
 * - className {string} - Additional Tailwind classes (optional)
 *
 * Variants:
 * 1. Primary
 *    - Solid blue background (bg-blue-600)
 *    - White text
 *    - Darker blue on hover (hover:bg-blue-700)
 *    - Used for main CTAs (e.g., "View My Work")
 *
 * 2. Secondary
 *    - Transparent background with blue border (border-2 border-blue-600)
 *    - Blue text
 *    - Light blue background on hover
 *    - Used for secondary actions (e.g., "Contact Me")
 *
 * 3D Hover Effect:
 * - whileHover applies multiple transforms:
 *   - scale: 1.05 (5% enlargement)
 *   - rotateX: 10 (tilts forward 10 degrees)
 *   - rotateY: 10 (tilts right 10 degrees)
 *   - translateZ: 10 (moves toward viewer)
 * - transformStyle: "preserve-3d" enables 3D perspective
 * Why? Creates premium "pop-out" effect that feels interactive and modern
 *
 * Click Animation:
 * - whileTap={{ scale: 0.95 }} shrinks button on click
 * Why? Provides tactile feedback - feels like button is "pressed"
 * This mimics physical button behavior, improving perceived responsiveness
 *
 * Styling Strategy:
 * - baseStyles contains shared properties (padding, border-radius, transitions)
 * - variants object defines color schemes
 * - Template literal combines styles dynamically
 * Why? DRY principle - shared styles defined once, variants compose them
 *
 * Accessibility:
 * - Uses semantic <a> element (not div with onClick)
 * - href attribute makes it a proper link
 * - Button size (px-8 py-3) sufficient for touch targets
 * - Hover/focus states provide visual feedback
 *
 * Usage Examples:
 * <Button3D href="#projects" variant="primary">View My Work</Button3D>
 * <Button3D href="#contact" variant="secondary">Contact Me</Button3D>
 * <Button3D href="/projects" variant="primary">See All Projects</Button3D>
 */
function Button3D({ href, variant = 'primary', children, className = '' }) {
  const baseStyles = "px-8 py-3 rounded-full transform transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
  };

  return (
    <motion.a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ 
        scale: 1.05,
        rotateX: 10,
        rotateY: 10,
        translateZ: 10
      }}
      whileTap={{ scale: 0.95 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.a>
  );
}

Button3D.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Button3D;