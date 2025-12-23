import { Code2, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { useMemo, useState } from 'react';

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