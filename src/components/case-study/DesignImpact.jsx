import { PropTypes } from "prop-types";

export default function DesignImpact({ designImpact }) {
  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-8">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Impact of the design</h1>
        {designImpact.map((designImpact, index) => (
            <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white"> {designImpact.title} </h2>
                <p className="text-gray-600 dark:text-gray-300"> {designImpact.description} </p>
            </div>
        ))}
    </div>
  )
}

DesignImpact.propTypes = {
    designImpact: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,	
            description: PropTypes.string
        })
    )
}