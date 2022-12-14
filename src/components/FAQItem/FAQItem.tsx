import "./FAQItem.css"

const FAQItem = ({question, answer}: { question: string, answer: string }) => {


    return (
        <details>
            <summary>{question}</summary>
            {answer}
        </details>
    )
}
export default FAQItem;