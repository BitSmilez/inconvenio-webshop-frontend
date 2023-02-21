import {mount} from "cypress/react18";
import CustomerContextProvider from "../../context/CustomerContext";
import {MemoryRouter as TestRouter} from 'react-router-dom';
import CategoryBar from "./CategoryBar";

describe("CategoryBar", () => {
    beforeEach(() => {
        mount(
            <CustomerContextProvider>
                <TestRouter>
                    <CategoryBar/>
                </TestRouter>
            </CustomerContextProvider>
        );
    });


    it("should mount", () => {
    });

    it("should have 4 standard labels", () => {
        cy.get('.category-bar-label').should('have.length', 4);
    });
    it("should have a special sale label", () => {
        cy.get('.category-bar-sale-label').should('exist');
    });
});