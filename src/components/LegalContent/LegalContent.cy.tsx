import LegalContent from "./LegalContent";
import {MemoryRouter as TestRouter} from 'react-router-dom';

describe("LegalContent", () => {
    it("should mount", () => {
        cy.mount(
            <TestRouter>
                <LegalContent/>
            </TestRouter>);
    });
    it("should have a back to shop link", () => {
        cy.mount(
            <TestRouter>
                <LegalContent/>
            </TestRouter>);
        cy.get(".back-to-shop-link").should("exist");
    });
    it("back to shop link should have a href to /", () => {
        cy.mount(
            <TestRouter>
                <LegalContent/>
            </TestRouter>);
        cy.get(".back-to-shop-link").should("have.attr", "href", "/");
    });
    it("click on back to shop link should redirect to /", () => {
        cy.mount(
            <TestRouter>
                <LegalContent/>
            </TestRouter>);
        cy.get(".back-to-shop-link").click();
        cy.url().should("include", "/");
    });
});