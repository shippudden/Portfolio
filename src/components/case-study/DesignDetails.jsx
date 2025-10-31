import { PropTypes } from "prop-types";

export default function DesignDetails({ designDetails }) {
  return (
    <div>
        {designDetails.map((design, index) => (
            <div key={index} className="items-start mb-4 gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{design.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 ml-3 mb-3'>{design.description}</p>
            </div>
        ))}
    </div>
  )
}

DesignDetails.propTypes = {
    designDetails: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        })
    )
}
