import LegalContent from "./LegalContent";
import {MemoryRouter as TestRouter} from 'react-router-dom';
import {mount} from "cypress/react18";


describe("LegalContent", () => {
    it("should mount", () => {
        mount(
            <TestRouter>
                <LegalContent/>
            </TestRouter>);
    });
    it("should have a back to shop link", () => {
        mount(
            <TestRouter>
                <LegalContent/>
            </TestRouter>);
        cy.get("li > a").should("exist");
        cy.get("li > a").should("have.text", "Back to Shop");
    });
    it("back to shop link should have a href to /", () => {
        mount(
            <TestRouter>
                <LegalContent/>
            </TestRouter>);
        cy.get("li > a").should("have.attr", "href", "/");
    });
    it("click on back to shop link should redirect to /", () => {
        mount(
            <TestRouter>
                <LegalContent/>
            </TestRouter>);
        cy.get("li > a").click();
        cy.url().should("include", "/");
    });
});