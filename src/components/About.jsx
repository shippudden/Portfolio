import { motion } from 'framer-motion';
import { Code2, Palette, Lightbulb } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I&apos;m a passionate UI/UX Designer and Front-end Developer with a keen eye for creating beautiful, 
            intuitive digital experiences. With expertise in both design and development, I bridge the gap 
            between aesthetics and functionality, ensuring that every project not only looks stunning but 
            also delivers exceptional user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 0.2 
            }}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transform-gpu hover:scale-105 transition-all duration-300 hover:shadow-xl"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <div className="flex items-center justify-center mb-4 transform translate-z-12">
              <Code2 className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center dark:text-white transform translate-z-12">Front-end Development</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center transform translate-z-12">
              Building responsive and performant web applications with modern technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 0.3 
            }}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transform-gpu hover:scale-105 transition-all duration-300 hover:shadow-xl"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <div className="flex items-center justify-center mb-4 transform translate-z-12">
              <Palette className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center dark:text-white transform translate-z-12">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center transform translate-z-12">
              Creating intuitive and visually appealing user interfaces and experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 0.4 
            }}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transform-gpu hover:scale-105 transition-all duration-300 hover:shadow-xl"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <div className="flex items-center justify-center mb-4 transform translate-z-12">
              <Lightbulb className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center dark:text-white transform translate-z-12">Problem Solving</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center transform translate-z-12">
              Finding creative solutions to complex design and development challenges
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;