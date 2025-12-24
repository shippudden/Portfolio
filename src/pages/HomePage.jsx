import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/ProjectFilter';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * HomePage Component
 *
 * Main landing page displaying the complete portfolio experience.
 *
 * Page Structure:
 * 1. Navbar - Fixed navigation bar with dark mode toggle
 * 2. Hero - Eye-catching introduction with particles
 * 3. About - Personal introduction and expertise areas
 * 4. Projects - Featured projects with filtering
 * 5. Skills - Technical skills and tools grid
 * 6. Contact - Social links and call-to-action
 * 7. Footer - Additional links and info
 *
 * Routing:
 * - Route path: '/'
 * - This is the primary landing page
 * - Users navigate to /projects page for full project showcase
 *
 * Styling Decisions:
 * - min-h-screen ensures page fills viewport
 * - bg-white / dark:bg-gray-900 provides base background
 * - transition-colors duration-200 enables smooth dark mode switching
 * - pt-20 adds padding-top to account for fixed navbar height
 *
 * Performance Characteristics:
 * - All sections use lazy animations (whileInView)
 * - Particles only animate in viewport
 * - No heavy computations on main thread
 * - Smooth color transitions between sections
 *
 * UX Considerations:
 * - Navbar sticks to top for easy navigation
 * - Section IDs (#home, #about, #projects, etc.) enable scroll-to-section
 * - Scroll margin (scroll-mt-20) accounts for navbar when scrolling
 * - Dark mode persists across page navigation
 *
 * Accessibility:
 * - Semantic HTML with proper heading hierarchy
 * - Navbar links have proper aria-labels
 * - Color contrast sufficient in both themes
 * - Keyboard navigation supported throughout
 *
 * Components Composition:
 * - Each major section is a separate component
 * - Single Responsibility Principle applied
 * - Easy to reorder sections or swap components
 * - Footer separated for semantic clarity
 */
function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;