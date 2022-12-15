import GenericPageHeadline from "./GenericPageHeadline";

describe("GenericPageHeadline", () => {
    it("should mount", () => {
        cy.mount(<GenericPageHeadline text={"Hello Headline"} />)
    });
    it("should have the correct text", () => {
        cy.mount(<GenericPageHeadline text={"Hello Headline"} />)
        cy.get("h1").contains("Hello Headline")
    });
});
