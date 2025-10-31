import { motion } from 'framer-motion';
import Button3D from './ui/Button3D';
import ParticlesBackground from './ui/ParticleBackground';

function Hero() {

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden scroll-mt-20" id="home">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Boluwatife David
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl mb-4 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            UI/UX Designer & Front-end Developer
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Crafting beautiful digital experiences where design meets code
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button3D href="#projects" variant="primary">
              View My Work
            </Button3D>
            <Button3D href="#contact" variant="secondary">
              Contact Me
            </Button3D>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a 
          href="#about" 
          className="text-blue-600 dark:text-blue-600 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Scroll to About section"
        >
          <svg 
            className="w-6 h-6"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="4" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;