import FAQItem from "./FAQItem";

describe("FAQItem", () => {
    it("should mount", () => {
        cy.mount(<FAQItem question={"test"} answer={"test"}/>);
    });
    it("should have a question", () => {
        cy.mount(<FAQItem question={"question"} answer={"answer"}/>);
        cy.get("details > summary").contains("question");
    });
    it("should have an answer", () => {
        cy.mount(<FAQItem question={"question"} answer={"answer"}/>);
        cy.get("details").contains("answer");
    });
    it("should be open when clicked", () => {
        cy.mount(<FAQItem question={"question"} answer={"answer"}/>);
        cy.get("details").click();
        cy.get("details").should("have.attr", "open");
    });
});
