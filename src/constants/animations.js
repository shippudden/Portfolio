export const ANIMATION_DELAYS = {
  FAST: 0.1,
  NORMAL: 0.2,
  SLOW: 0.4,
};

export const IMAGE_TRANSITIONS = {
  FADE_SLIDE: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

export const IMAGE_HEIGHTS = {
  SMALL: "h-[400px]",
  MEDIUM: "h-[500px]",
  LARGE: "h-[600px]",
};

export const COMMON_CLASSES = {
  imageContainer: "w-full object-cover rounded-xl mb-12",
  backButton: "inline-flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8",
  pageTitle: "text-4xl md:text-5xl font-bold mb-6 dark:text-white",
  sectionTitle: "text-2xl font-bold mb-6 dark:text-white",
  bodyText: "text-gray-600 dark:text-gray-300",
};
