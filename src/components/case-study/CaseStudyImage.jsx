import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { IMAGE_TRANSITIONS, ANIMATION_DELAYS, IMAGE_HEIGHTS, COMMON_CLASSES } from "../../constants/animations";

export default function CaseStudyImage({
  src,
  alt,
  height = "MEDIUM",
  delay = ANIMATION_DELAYS.NORMAL
}) {
  return (
    <motion.img
      initial={IMAGE_TRANSITIONS.FADE_SLIDE.initial}
      animate={IMAGE_TRANSITIONS.FADE_SLIDE.animate}
      transition={{ delay }}
      src={src}
      alt={alt}
      className={`${COMMON_CLASSES.imageContainer} ${IMAGE_HEIGHTS[height]}`}
    />
  );
}

CaseStudyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.oneOf(["SMALL", "MEDIUM", "LARGE"]),
  delay: PropTypes.number,
};
