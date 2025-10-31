import { motion } from 'framer-motion';
import { skills } from '../data/skills';

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