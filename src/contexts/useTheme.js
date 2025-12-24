import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

/**
 * useTheme Custom Hook
 *
 * Provides easy access to dark mode state and toggle function.
 *
 * Returns:
 * {Object}
 * - darkMode {boolean} - True if dark mode is active, false otherwise
 * - setDarkMode {function} - Function to update dark mode (pass boolean)
 *
 * Usage:
 * const { darkMode, setDarkMode } = useTheme();
 *
 * Example:
 * <button onClick={() => setDarkMode(!darkMode)}>
 *   {darkMode ? 'Light Mode' : 'Dark Mode'}
 * </button>
 *
 * Error Handling:
 * - Throws error if used outside ThemeProvider
 * - Why? Prevents silent failures and helps developers catch mistakes early
 * - Error message clearly indicates you must wrap app with ThemeProvider
 *
 * Design Pattern:
 * - Custom hook pattern extracts context logic into reusable function
 * - Cleaner than useContext(ThemeContext) in every component
 * - Single responsibility: manage theme access
 * - Can be extended with additional logic if needed (e.g., scheduling theme changes)
 *
 * Best Practice:
 * - Always use this hook instead of useContext directly
 * - Maintains consistency across the codebase
 * - Makes refactoring easier if context structure changes
 */
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  }