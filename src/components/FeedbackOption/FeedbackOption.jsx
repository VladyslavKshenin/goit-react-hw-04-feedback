import { List } from "./FeedbackOption.stayled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map((option, index) => (
                <li key={index} >
                    <button
                        type="button"
                        onClick={onLeaveFeedback}
                        name={option}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </List>
    )   
}