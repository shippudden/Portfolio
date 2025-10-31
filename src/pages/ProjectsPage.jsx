import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import ParticlesBackground from '../components/ui/ParticleBackground';

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