import { PropTypes } from "prop-types";

export default function WhatIWillCover({ whatIWillCover }) {
  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-8 mb-8">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">What I&apos;ll Cover</h1>
        {whatIWillCover.map((cover, index) => (
            <div key={index}>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {cover.description}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {cover.projectOverview}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {cover.projectDescription}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {cover.designProcess}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 ml-3">
                    {cover.visualDesign}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 ml-3">
                    {cover.highFidelity}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {cover.keyFeatures}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {cover.results}
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300">
                    {cover.learnings}
                </p>
            </div>
        ))}
    </div>
  )
}

WhatIWillCover.propTypes = {
    whatIWillCover: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string,
            projectOverview: PropTypes.string,
            projectDescription: PropTypes.string,
            designProcess: PropTypes.string,
            visualDesign: PropTypes.string,
            highFidelity: PropTypes.string,
            keyFeatures: PropTypes.string,
            results: PropTypes.string,
            learnings: PropTypes.string
        })
    ),
}
