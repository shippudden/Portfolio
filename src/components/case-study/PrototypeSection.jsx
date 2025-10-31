import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PropTypes } from "prop-types";

export default function PrototypeSection({ url }) {
  return (
    <motion.div
      className="mt-16 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        View the Interactive Prototype 
      </h3>

      <a 
      href={url} 
      target="_blank" 
      rel="nooopener noreferrer" 
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <span>Open in Figma</span>
        <ExternalLink size={20} />
      </a>
    </motion.div>
  )
}

PrototypeSection.propTypes = {
  url: PropTypes.string.isRequired
}
