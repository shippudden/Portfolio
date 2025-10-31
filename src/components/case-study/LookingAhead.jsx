import { PropTypes } from "prop-types";

export default function LookingAhead({ lookingAhead }) {
  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-8">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Looking Ahead</h1>
        {lookingAhead.map((lookingAhead, index) => (
            <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white"> {lookingAhead.title} </h2>
                <p className="text-gray-600 dark:text-gray-300"> {lookingAhead.description} </p>
            </div>
        ))}
    </div>
  )
}

LookingAhead.propTypes = {
    lookingAhead: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,	
            description: PropTypes.string
        })
    )
}