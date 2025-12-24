import { motion } from 'framer-motion';
import { skills } from '../data/skills';

/**
 * Skills Component
 *
 * Displays technical skills and tools as an interactive grid with 3D effects.
 *
 * Data Source:
 * - Imports skills array from data/skills.js
 * - Each skill has: name, logo (image URL)
 *
 * Key Features:
 * - Responsive grid: 2 columns mobile, 3 columns tablet, 5 columns desktop
 * - Each skill shows as a card with logo/image
 * - Flip animation on hover (rotateY 180 degrees)
 * - Staggered entrance animations with progressive delays
 * - Subtle gradient overlay appears on hover
 *
 * Styling Decisions:
 * - Light gray background differentiates from other sections
 * - Cards have white background with box shadow
 * - Perspective property enables 3D transforms
 * - transformStyle: "preserve-3d" required for proper 3D effects
 *
 * 3D Flip Animation:
 * - whileHover={{ rotateX: 15, rotateY: 15, scale: 1.05 }}
 * - Creates tilting effect when hovering over card container
 * - Inner logo has separate whileHover={{ rotateY: 180 }}
 * - 0.6s duration allows smooth flip animation
 * Why? Adds interactivity and visual polish to skill presentation
 *
 * Staggered Animation:
 * - transition={{ delay: index * 0.1 }} staggers each skill
 * - Creates wave effect as skills enter viewport
 * - viewport={{ once: true }} prevents re-animation on scroll
 * Why? More engaging than all skills appearing at once
 *
 * Layout:
 * - Each card has fixed size (p-8) for consistent spacing
 * - Logo image has dark:brightness-90 for dark mode visibility
 * - Centered flex layout ensures logo appears centered
 *
 * Performance:
 * - Uses data-driven rendering with .map()
 * - No hardcoded skill values - data-driven approach
 * - Easy to add new skills by updating data/skills.js
 */
function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20" id="skills">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group perspective"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  rotateX: 15,
                  rotateY: 15,
                  scale: 1.05
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="w-24 h-24 flex items-center justify-center"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="w-20 h-20 object-contain filter dark:brightness-90 cursor-pointer"
                  />
                </motion.div>
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ transform: "translateZ(30px)" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;