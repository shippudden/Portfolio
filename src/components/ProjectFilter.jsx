import { Code2, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { useMemo, useState } from 'react';

/**
 * ProjectFilter Component (Projects Section)
 *
 * Manages project filtering and displays a featured subset of projects with filter controls.
 *
 * State:
 * - projectFilter {string} - Currently selected filter ('all', 'design', 'development')
 *
 * Features:
 * - Filter buttons for All, Design, and Development project types
 * - Displays only 3 featured projects at a time (limited for homepage)
 * - Button states change color/background when selected
 * - Responsive button layout that works on mobile
 * - "See All Projects" link to dedicated projects page
 *
 * Performance Optimization - useMemo:
 * - filteredProjects is memoized to avoid recalculating on every render
 * - Only recalculates when projectFilter dependency changes
 * Why? Filtering array of projects is fast, but memoizing is a best practice
 * for demonstrating performance awareness. Keeps computation out of render flow.
 *
 * Styling Decisions:
 * - Filter buttons have active state (blue-600 background when selected)
 * - Inactive buttons use gray background (light mode) or dark:bg-gray-800 (dark mode)
 * - hover:scale-105 provides tactile feedback on hover
 * - 3-column responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop
 * - Gap increases on larger screens for better spacing
 *
 * Button Interaction Strategy:
 * - Buttons include icons (Code2, Palette) to improve visual recognition
 * - Smooth transitions between selected/unselected states
 * - Scale animation on hover creates button feedback
 *
 * Layout:
 * - Full-width section with padding for breathing room
 * - Container with max-width prevents stretching on ultra-wide screens
 * - Centered heading and buttons for visual hierarchy
 * - Grid of project cards with consistent gap spacing
 */
function Projects() {
  const [projectFilter, setProjectFilter] = useState('all');
  
  const filteredProjects = useMemo(() => {
    const filtered = projectFilter === 'all' 
      ? projects 
      : projects.filter(project => project.type === projectFilter);
    
    // Always limit to 3 projects
    return filtered.slice(0, 3);
  }, [projectFilter]);

  return (
    <section id="projects" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-[1200px]">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setProjectFilter('all')}
            className={`px-6 py-2 rounded-full transform hover:scale-105 transition-all ${
              projectFilter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            All
          </button>

          <button
            onClick={() => setProjectFilter('development')}
            className={`px-6 py-2 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all ${
              projectFilter === 'development'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            <Code2 size={18} /> Development
          </button>

          <button
            onClick={() => setProjectFilter('design')}
            className={`px-6 py-2 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all ${
              projectFilter === 'design'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            <Palette size={18} /> Design
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 lg:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/projects"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;