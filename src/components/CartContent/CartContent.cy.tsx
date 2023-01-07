import CartContent from "./CartContent";
import {mount} from "cypress/react18";

describe("CartContent", () => {
    beforeEach(() => {
        mount(<CartContent />);
    });

    it("should mount", () => {});

    it("should have a continue shopping and checkout button", () => {
        cy.get(':nth-child(1) > .link-button-link').should('exist');
        cy.get(':nth-child(2) > .link-button-link').should('exist');
    });
    it("should have a cart item container", () => {
        cy.get('.cart-container').should('exist');
    });
    it("should have a cart details container", () => {
        cy.get('.cart-details-container').should('exist');
    });
    it("should have a headline", () => {
        cy.get('.headline').should('exist');
    });
});