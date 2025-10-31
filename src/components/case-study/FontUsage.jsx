import { PropTypes } from "prop-types";

export default function FontUsage({ fontUsage }) {
  return (
    <div>
        {fontUsage.map((fontUsage, index) => (
            <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white"> {fontUsage.title} </h2>
            <p className="text-gray-600 dark:text-gray-300"> {fontUsage.description} </p>
            </div>
        ))}
    </div>
  )
}

FontUsage.propTypes = {
    fontUsage: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,	
            description: PropTypes.string
        })
    )
}
