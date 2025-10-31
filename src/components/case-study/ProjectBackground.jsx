import { PropTypes } from "prop-types";

export default function ProjectBackground({ projectBackground }) {
  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-8 mb-8">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Project Background</h1>
        {projectBackground.map((projectB, index) => (
            <div key={index}>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {projectB.description1}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {projectB.description2}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 ml-3">
                    {projectB.description3}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 ml-3">
                    {projectB.description4}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 ml-3">
                    {projectB.description5}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {projectB.description6}
                </p>
            </div>
        ))}
    </div>
  )
}


ProjectBackground.propTypes = {
    projectBackground: PropTypes.arrayOf(
        PropTypes.shape({
            description1: PropTypes.string,
            description2: PropTypes.string,
            description3: PropTypes.string,
            description4: PropTypes.string,
            description5: PropTypes.string,
            description6: PropTypes.string
        })
    ),
}
