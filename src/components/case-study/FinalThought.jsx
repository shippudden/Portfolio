import { PropTypes } from "prop-types";

export default function FinalThought({ finalThought }) {
  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-8">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Final Thoughts</h1>
        {finalThought.map((finalThought, index) => (
            <div key={index} className="mb-12">
                <p className="text-gray-600 dark:text-gray-300"> {finalThought.description} </p>
            </div>
        ))}
    </div>
  )
}

FinalThought.propTypes = {
    finalThought: PropTypes.arrayOf(
        PropTypes.shape({	
            description: PropTypes.string
        })
    )
}
