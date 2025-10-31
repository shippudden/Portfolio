import { PropTypes } from "prop-types";

export default function LessonsLearned({ lessonsLearned }) {
  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-700 pb-8">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Lessons Learned</h1>
        {lessonsLearned.map((lessonsLearned, index) => (
            <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white"> {lessonsLearned.title} </h2>
                <p className="text-gray-600 dark:text-gray-300"> {lessonsLearned.description} </p>
            </div>
        ))}
    </div>
  )
}

LessonsLearned.propTypes = {
    lessonsLearned: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,	
            description: PropTypes.string
        })
    )
}
