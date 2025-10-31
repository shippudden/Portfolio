import { PropTypes } from "prop-types";

export default function Introduction({ introduction }) {
  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-8 mb-8">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Introduction</h1>
        {introduction.map((introduction, index) => (
            <p key={index} className="mb-5 text-gray-700 dark:text-gray-300">
                {introduction.description}
            </p>
        ))}
    </div>
  )
}

Introduction.propTypes = {
    introduction: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired
        })
    ).isRequired
}
