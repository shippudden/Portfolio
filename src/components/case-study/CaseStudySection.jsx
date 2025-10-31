import { PropTypes } from "prop-types";

export default function CaseStudySection({ title, children }) {
  return (
    <section className="mb-12 border-b-2 border-gray-300 dark:border-gray-700 pb-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white"> {title} </h2>
        <div className="text-gray-700 dark:text-gray-300"> {children} </div>
    </section>
  )
}

CaseStudySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
}
