import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/useTheme';
import NavLink from './ui/NavLink';

/**
 * Navbar Component
 *
 * A fixed, responsive navigation bar with dark mode toggle and mobile menu support.
 *
 * Key Features:
 * - Dynamic navigation items based on current page (smooth scroll on home, links on other pages)
 * - Dark mode toggle with animated sun/moon icon
 * - Mobile hamburger menu with animated dropdown
 * - Backdrop blur effect for modern aesthetic
 * - Gradient logo with smooth animations
 *
 * Styling Decisions:
 * - Fixed positioning with z-50 keeps navbar above all other content
 * - Backdrop blur creates glass-morphism effect (modern, premium feel)
 * - Semi-transparent background allows content beneath to show through
 * - Dark mode support via useTheme hook applied throughout
 *
 * Mobile Responsive:
 * - Desktop (md+): Full horizontal navigation with dark mode toggle
 * - Mobile: Hamburger menu expands vertically with smooth animation
 * - Same navigation items, different presentation for each breakpoint
 *
 * Animation Strategy:
 * - Navbar slides in from top on mount (spring physics)
 * - Hamburger menu animates open/closed
 * - Dark mode toggle spins smoothly (180 degree rotation)
 * - Uses Framer Motion for all animations
 */
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = isHomePage ? [
    { label: 'Home', to: '#home', id: 'home' },
    { label: 'About', to: '#about', id: 'about' },
    { label: 'Projects', to: '#projects', id: 'projects' },
    { label: 'Skills', to: '#skills', id: 'skills' },
    { label: 'Contact', to: '#contact', id: 'contact' }
  ] : [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' }
  ];

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={scrollToTop} className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            BD
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={item.id ? (e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                } : undefined}
              >
                {item.label}
              </NavLink>
            ))}
            
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 py-4 px-6 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={(e) => {
                    if (item.id) {
                      e.preventDefault();
                      scrollToSection(item.id);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar