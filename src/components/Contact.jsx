import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

/**
 * Contact Component
 *
 * Final section with call-to-action and social media links.
 *
 * Key Features:
 * - Large heading inviting connection
 * - Three social links: GitHub, LinkedIn, Email
 * - Rotating animation on icon hover
 * - Smooth scale transitions
 * - Simple, focused design to encourage action
 *
 * Styling Decisions:
 * - No background color - blends with main page background
 * - Centered text layout focuses attention
 * - Icons are large (size={24}) for easy tapping on mobile
 * - Consistent dark mode support with color classes
 *
 * Hover Animations:
 * - whileHover={{ rotate: 10 }} rotates icons 10 degrees
 * - hover:scale-110 enlarges icons on hover
 * - Color transitions: text-gray-600 → hover:text-blue-600
 * - Dark mode colors adjust automatically
 * Why? Provides clear visual feedback that links are interactive
 *
 * Link Implementation:
 * - GitHub: Opens repository
 * - LinkedIn: Opens profile
 * - Email: Opens email client with pre-filled recipient
 * - All use target="_blank" and rel="noopener noreferrer" for security
 *
 * Layout:
 * - Section marked with id="contact" for navbar navigation
 * - scroll-mt-20 accounts for fixed navbar
 * - max-w-4xl prevents text from spreading too wide
 * - flex gap-8 creates even spacing between icons
 *
 * Accessibility:
 * - Semantic <a> tags for proper link behavior
 * - Icons are clear (from lucide-react)
 * - Color alone doesn't convey information (icons help)
 * - Sufficient size for touch targets (24px)
 *
 * Copy Strategy:
 * - Friendly, inviting heading "Let's Connect"
 * - Simple call-to-action text below links
 * - Professional but warm tone
 */
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