import { PropTypes } from "prop-types";

export default function ColorUsage({ colorUsage }) {
  return (
    <div>
        <h1 className="text-2xl font-bold mb-6 dark:text-white pb-3">Color usage In the interface</h1>
        {colorUsage.map((colorUsage, index) => (
            <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white"> {colorUsage.title} </h2>
                <p className="text-gray-600 dark:text-gray-300"> {colorUsage.description} </p>
            </div>
        ))}
    </div>
  )
}

ColorUsage.propTypes = {
    colorUsage: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,	
            description: PropTypes.string
        })
    )
}
