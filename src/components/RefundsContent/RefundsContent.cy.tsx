import RefundsContent from "./RefundsContent";
import {mount} from "cypress/react18";

describe("RefundsContent", () => {
    it("should mount", () => {
        mount(<RefundsContent/>)
    });
    it("should have a Return Policy title", () => {
        mount(<RefundsContent/>)
        cy.get("h1").should("exist")
        cy.get("h1").contains("Return Policy")
    });
    it("should have a back to shop link that navigates to the shop page", () => {
        mount(<RefundsContent/>)
        cy.get("li > a").should("exist")
        cy.get("li > a").contains("Back to Shop")
        cy.get("li > a").should("have.attr", "href", "/")
    });
});
