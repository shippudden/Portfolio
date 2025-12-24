import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

/**
 * ThemeProvider Component
 *
 * Provides dark mode state management across the entire application using React Context.
 *
 * Props:
 * - children {ReactNode} - Child components that can access theme context
 *
 * State:
 * - darkMode {boolean} - Whether dark mode is currently active
 * - setDarkMode {function} - Updates dark mode state
 *
 * Key Features:
 * 1. Persistent Storage
 *    - Saves theme preference to localStorage key 'theme'
 *    - Survives page reloads and new sessions
 *
 * 2. System Preference Detection
 *    - On first load, checks if user has saved preference
 *    - If not, detects system preference via matchMedia('prefers-color-scheme: dark')
 *    - Respects OS-level dark mode settings for new users
 *    - Why? Better default UX - matches user's system settings automatically
 *
 * 3. Dynamic Theme Updates
 *    - Listens to system theme changes
 *    - Updates app theme only if user hasn't manually set preference
 *    - If user manually selects theme, system changes are ignored (localStorage overrides)
 *    - Why? User preference takes precedence over system changes
 *
 * 4. DOM Manipulation
 *    - Adds 'dark' class to <html> element when darkMode is true
 *    - Removes 'dark' class when darkMode is false
 *    - This triggers all 'dark:' CSS utilities throughout the app
 *    - Why? Tailwind CSS uses class-based dark mode toggling
 *
 * Styling Impact:
 * - All dark:* classes in Tailwind become active when 'dark' class present on <html>
 * - Example: dark:bg-gray-900 background shows when dark mode is on
 * - Colors in dark mode chosen for readability and reduced eye strain
 *
 * Hook Usage:
 * - Use the useTheme() hook in components to access darkMode and setDarkMode
 * - Never access ThemeContext directly - use the custom hook instead
 *
 * Performance Considerations:
 * - useState initializer function runs only once on mount (not on every render)
 * - useEffect listens for system changes but only updates if no user preference set
 * - Efficient localStorage access (only when theme changes)
 * - No unnecessary re-renders of child components
 */
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext };