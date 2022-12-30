import LinkButton from "./LinkButton";

describe("LinkButton", () => {
    it("should mount", () => {
        cy.mount(<LinkButton URL={"/"} text={"Hello Button"} />)
    });
    it("should have the correct text", () => {
        cy.mount(<LinkButton URL={"/"} text={"Hello Button"} />)
        cy.get("li > a").contains("Hello Button")
    });
    it("should have the correct URL", () => {
        cy.mount(<LinkButton URL={"/"} text={"Hello Button"} />)
        cy.get("li > a").should("have.attr", "href", "/")
    });
    it("should redirect to the correct URL", () => {
        cy.mount(<LinkButton URL={"/legal"} text={"Hello Button"} />)
        cy.get("li > a").click()
        cy.location('pathname').should('eq', '/legal')
    });
});
