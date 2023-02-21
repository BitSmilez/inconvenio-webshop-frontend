import {mount} from "cypress/react18";
import CustomerContextProvider from "../../context/CustomerContext";
import {MemoryRouter as TestRouter} from 'react-router-dom';
import QuantitySelector from "./QuantitySelector";

describe("QuantitySelector", () => {
    beforeEach(() => {
        mount(
            <CustomerContextProvider>
                <TestRouter>
                    <QuantitySelector handleChange={null} latestQuantity={5}/>
                </TestRouter>
            </CustomerContextProvider>
        );
    });

    it("should mount", () => {
    });

    it("should have a cart product quantity label", () => {
        cy.get('.cart-product-quantity-label').should('exist');
    });
    it("should have a cart product amount with 5 as value", () => {
        cy.get('.cart-product-amount').should('exist').should('have.value', '5');
    });
    it("should have a cart product amount with 50 options", () => {
        cy.get('.cart-product-amount').children().should('have.length', 50);
    });
    it("should have a cart product amount with 1 as first option", () => {
        cy.get('.cart-product-amount').children().first().should('have.value', '1');
    });
});
