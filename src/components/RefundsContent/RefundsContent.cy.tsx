import RefundsContent from "./RefundsContent";

describe("RefundsContent", () => {
    it("should mount", () => {
        cy.mount(<RefundsContent/>)
    });
    it("should have a Return Policy title", () => {
        cy.mount(<RefundsContent/>)
        cy.get("h1").should("exist")
        cy.get("h1").contains("Return Policy")
    });
    it("should have a back to shop link that navigates to the shop page", () => {
        cy.mount(<RefundsContent/>)
        cy.get("li > a").should("exist")
        cy.get("li > a").contains("Back to Shop")
        cy.get("li > a").should("have.attr", "href", "/")
    });
});
