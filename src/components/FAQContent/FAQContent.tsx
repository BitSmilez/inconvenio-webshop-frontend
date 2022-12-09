import "./FAQContent.css"
import faqQuestions from "../../data/FAQData.json"
import FAQItem from "../FAQItem/FAQItem";
import LinkButton from "../LinkButton/LinkButton";
import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";

const FAQContent = () => {


    return (
        <div className={"faq-wrapper"}>
            <div className={"faq-container"}>
                <LinkButton URL={"/"} text={"Back to Shop"}/>
                <GenericPageHeadline text={"FAQ"}/>
            </div>
            <div className={"faq-content"}>
                <p>Here you can find all the answers to your questions.</p>
                {faqQuestions.map((faqQuestion, index) => (
                    <FAQItem question={faqQuestion.question} answer={faqQuestion.answer} key={index}/>
                ))}
            </div>
        </div>
    )

}

export default FAQContent;