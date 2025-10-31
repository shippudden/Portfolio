import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-12 dark:text-white">Let&apos;s Connect</h2>
        <div className="flex justify-center gap-8 mb-12">
          <motion.a 
            href="https://github.com/shippudden" 
            target='_blank'
            rel='nooopener noreferrer'
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-all"
            whileHover={{ rotate: 10 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/boluwatife-david-640089309/" 
            target='_blank'
            rel='nooopener noreferrer'
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-all"
            whileHover={{ rotate: 10 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="mailto:boluwatifeda45@gmail.com" 
            target='_blank'
            rel='nooopener noreferrer'
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-all"
            whileHover={{ rotate: 10 }}
          >
            <Mail size={24} />
          </motion.a>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </div>
    </section>
  );
}

export default Contact;