import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Footer Component
 *
 * Bottom section of the page with copyright info and scroll-to-top button.
 *
 * Key Features:
 * - Copyright notice with dynamic year
 * - "Scroll to Top" button appears after scrolling 400px down
 * - Button animates in/out smoothly with AnimatePresence
 * - Fixed position button for persistent accessibility
 *
 * State Management:
 * - showButton {boolean} - Controls visibility of scroll button
 * - Updates based on scroll position
 *
 * Scroll Detection:
 * - useEffect listens to scroll events
 * - Updates showButton when scrollY > 400
 * Why 400px? Arbitrary but practical threshold - user has scrolled enough
 * to benefit from quick return to top, but not immediately
 *
 * - Cleanup function removes listener to prevent memory leaks
 * Why? Prevents multiple listeners from accumulating on scroll events
 * and ensures proper cleanup when component unmounts
 *
 * Scroll Animation:
 * - Uses smooth scrolling (behavior: 'smooth')
 * - Animates button entrance/exit with opacity and y translation
 * Why? Natural, satisfying motion that guides user attention
 *
 * Button Styling:
 * - Fixed positioning (bottom-8 right-8) keeps it accessible
 * - Blue background (bg-blue-600) matches primary brand color
 * - Hover state darkens color for feedback
 * - Focus ring for keyboard accessibility (focus:ring-2)
 * - z-10 ensures button stays above other content but below modals
 *
 * Accessibility:
 * - Button has proper focus state (focus:outline-none focus:ring-2)
 * - Semantic button element for screen readers
 * - Icon communicates purpose clearly (ArrowUp)
 * - Color contrast sufficient in light and dark modes
 *
 * Dynamic Copyright:
 * - new Date().getFullYear() ensures year is always current
 * Why? No maintenance needed - copyright stays accurate forever
 *
 * Layout:
 * - Border-top separates footer from content
 * - Centered text for symmetry
 * - Simple, minimal design doesn't distract from content
 */
function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-8 px-6 border-t dark:border-gray-800">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Boluwatife David. All rights reserved.</p>
      </div>
      
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;