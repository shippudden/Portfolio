import { motion } from 'framer-motion';
import { Code2, Palette, Lightbulb } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I’m a creative and detail-oriented Product Designer and Frontend Developer with two years of experience designing and developing user-centered digital products. I’m passionate about crafting intuitive experiences that align design, functionality, and accessibility.

            My journey began with a design bootcamp that shaped my approach to product thinking and user experience. Since then, I’ve worked on several projects — including hackathons and UX challenges — that helped me refine my design process, prototype with purpose, and collaborate effectively with developers.

            I use Figma, Git/GitHub, and React to bring ideas to life — from wireframes and prototypes to responsive interfaces. I believe great design happens where empathy meets clarity, and every project is an opportunity to learn, iterate, and create value for users.
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
              I design digital products that are intuitive, accessible, and aligned with user needs. My process combines research, wireframing, and prototyping to create experiences that are both functional and delightful.
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
            <h3 className="text-xl font-semibold mb-2 text-center dark:text-white transform translate-z-12">Product Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center transform translate-z-12">
              I build responsive, interactive web interfaces using modern technologies like HTML, CSS, JavaScript, and React. My goal is to bring designs to life with clean, efficient, and maintainable code.

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
              Every project starts with understanding the “why.” I enjoy tackling real-world challenges by combining design thinking, user feedback, and iterative testing to create solutions that make an impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;