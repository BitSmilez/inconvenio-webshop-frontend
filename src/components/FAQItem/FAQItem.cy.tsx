import FAQItem from "./FAQItem";
import {mount} from "cypress/react18";


describe("FAQItem", () => {
    it("should mount", () => {
        mount(<FAQItem question={"test"} answer={"test"}/>);
    });
    it("should have a question", () => {
        mount(<FAQItem question={"question"} answer={"answer"}/>);
        cy.get("details > summary").contains("question");
    });
    it("should have an answer", () => {
        mount(<FAQItem question={"question"} answer={"answer"}/>);
        cy.get("details").contains("answer");
    });
    it("should be open when clicked", () => {
        mount(<FAQItem question={"question"} answer={"answer"}/>);
        cy.get("details").click();
        cy.get("details").should("have.attr", "open");
    });
});
