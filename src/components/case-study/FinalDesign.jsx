import { PropTypes } from "prop-types";

export default function FinalDesign({ finalDesign }) {
  return (
    <div>
        {finalDesign.map((finalDesign, index) => (
            <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white"> {finalDesign.title} </h2>
                <p className="text-gray-600 dark:text-gray-300"> {finalDesign.description} </p>
            </div>
        ))}
    </div>
  )
}

FinalDesign.propTypes = {
    finalDesign: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,	
            description: PropTypes.string
        })
    )
}
