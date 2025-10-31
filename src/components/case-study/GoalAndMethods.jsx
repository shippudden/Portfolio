import { PropTypes } from "prop-types";

export default function GoalAndMethods({ goalAndMethods }) {
  return (
    <div>
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Goal & Methods</h1>
        <p className='text-gray-600 dark:text-gray-300 mb-3'>
            While formal research was not conducted for this project, the design process was guided by the core objectives and best practices in UX/UI design. The project aimed to create a simple, engaging customization experience for users, which was informed by:
        </p>
        {goalAndMethods.map((goal, index) => (
            <div key={index}>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    {goal.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-3'>
                    {goal.description}
                </p>
            </div>
        ))}
    </div>
  )
}

GoalAndMethods.propTypes = {
    goalAndMethods: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
        })
    ),
}
