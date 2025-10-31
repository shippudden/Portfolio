import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

function Objectives({ objectives }) {
  return (
    <section className="mb-20 border-b-2 border-gray-300 dark:border-gray-700 pb-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Objectives</h2>
      <p className='text-gray-600 dark:text-gray-300 mb-3'>The primary objectives for Toycraft are: </p>
      <div className="grid gap-6">
        {objectives.map((objective, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{objective.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{objective.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

Objectives.propTypes = {
  objectives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
};

export default Objectives;