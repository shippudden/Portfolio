import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import ParticlesBackground from '../components/ui/ParticleBackground';

/**
 * ProjectsPage Component
 *
 * Dedicated page showing all projects in a grid layout.
 *
 * Routing:
 * - Route path: '/projects'
 * - Accessible via "See All Projects" button on home page
 * - Provides comprehensive project showcase separate from home
 *
 * Content:
 * - Displays ALL projects from data/projects.js
 * - No filtering - user sees complete portfolio
 * - Particle background for visual consistency with home page
 * - Same ProjectCard component as home page
 *
 * Grid Layout:
 * - Responsive: 1 column mobile, 2 columns tablet+
 * - All projects render at same time (vs. 3 on home)
 * - 8px gap between cards for spacing consistency
 * - max-w-6xl container prevents over-stretching
 *
 * Styling Decisions:
 * - Particle background adds visual interest
 * - Title "All Projects" clearly communicates page purpose
 * - Same dark mode support as home page
 * - Smooth color transitions when toggling theme
 *
 * Why Separate Page:
 * 1. Home page shows only 3 featured projects (focuses on quality)
 * 2. Projects page shows everything (comprehensive portfolio)
 * 3. Reduces home page scroll burden
 * 4. Dedicated URL shareable for specific context
 * 5. Better for SEO (dedicated page for projects)
 *
 * Performance:
 * - Uses React.lazy for code splitting (via Vite)
 * - All ProjectCards render with whileInView animations
 * - Only visible cards animate (improves performance)
 * - Particle animation uses requestAnimationFrame
 *
 * Navigation:
 * - Navbar available for navigation back to home
 * - Footer provides additional links
 * - Back link typically via home button or back button
 *
 * Accessibility:
 * - Semantic <main> element wraps content
 * - Heading hierarchy: <h1> for page title
 * - Color contrast sufficient in both themes
 * - Grid layout keyboard navigable
 */
function ProjectsPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ParticlesBackground />
      <Navbar />
      <main className="container mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold mb-12 dark:text-white">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectsPage