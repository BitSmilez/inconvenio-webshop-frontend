import {mount} from "cypress/react18";
import CustomerContextProvider from "../../context/CustomerContext";
import {MemoryRouter as TestRouter} from 'react-router-dom';
import CustomerMenu from "./CustomerMenu";

describe("CustomerMenu", () => {
    beforeEach(() => {
        mount(
            <CustomerContextProvider>
                <TestRouter>
                    <CustomerMenu/>
                </TestRouter>
            </CustomerContextProvider>
        );
    });

    it("should mount", () => {
    });

    it("should have a wishlist button", () => {
        cy.get('.fav-icon-btn').should('exist');
    });
    it("should have a cart button", () => {
        cy.get('.cart-icon-btn').should('exist');
    });
    it("should have an account menu", () => {
        cy.get('[data-testid="AccountCircleOutlinedIcon"]').should('exist');
    });
    it("account menu should have a login and register button when clicked", () => {
        cy.get('[data-testid="AccountCircleOutlinedIcon"]').click();
        cy.get('.MuiList-root > [tabindex="0"] > :nth-child(1)').should('exist');
        cy.get('.MuiList-root > [tabindex="0"] > :nth-child(2)').should('exist');
    });
});
