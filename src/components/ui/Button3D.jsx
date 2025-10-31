import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

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