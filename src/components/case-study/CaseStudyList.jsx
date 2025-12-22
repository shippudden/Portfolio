import PropTypes from "prop-types";
import { COMMON_CLASSES } from "../../constants/animations";

export default function CaseStudyList({ title, items, showIndex = false }) {
  return (
    <div>
      {title && (
        <h2 className={COMMON_CLASSES.sectionTitle}>{title}</h2>
      )}
      {items && items.map((item, index) => (
        <div key={index} className="mb-12">
          {item.title && (
            <h3 className={`${COMMON_CLASSES.sectionTitle} text-xl`}>
              {showIndex ? `${index + 1}. ` : ""}{item.title}
            </h3>
          )}
          {item.description && (
            <p className={COMMON_CLASSES.bodyText}>{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

CaseStudyList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  showIndex: PropTypes.bool,
};
