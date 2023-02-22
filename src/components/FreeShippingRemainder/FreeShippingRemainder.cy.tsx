import {mount} from "cypress/react18";
import CustomerContextProvider from "../../context/CustomerContext";
import {MemoryRouter as TestRouter} from 'react-router-dom';
import FreeShippingRemainder from "./FreeShippingRemainder";

describe("FreeShippingRemainder active", () => {
    beforeEach(() => {
        mount(
            <CustomerContextProvider>
                <TestRouter>
                    <FreeShippingRemainder freeShipping={100} cartSubTotal={50}/>
                </TestRouter>
            </CustomerContextProvider>
        );
    });

    it("should mount", () => {
    });

    it("should have a text", () => {
        cy.get('.free-shipping-notifier').should('exist');
    });
    it("should have a text with the correct value (Free over 100 -> card has 50)", () => {
        cy.get('.free-shipping-notifier').should('have.text', '(Only $50.00 more for free Shipping!)');
    });
    it("should have a red color", () => {
        cy.get('.free-shipping-notifier').should('have.css', 'color', 'rgb(255, 0, 0)');
    });
});

