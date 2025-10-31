import { PropTypes } from "prop-types";

export default function UserFlowDetails({ userFlowDetails }) {
  return (
    <div>
        <h3 className="text-2xl font-bold mb-6 dark:text-white">Key steps in the flow:</h3>
        {userFlowDetails.map((flow, index) => (
            <div key={index} className="items-start mb-4 gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{flow.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 ml-3 mb-3'>{flow.description}</p>
            </div>
        ))}
    </div>
  )
}

UserFlowDetails.propTypes = {
    userFlowDetails: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        })
    )
}
