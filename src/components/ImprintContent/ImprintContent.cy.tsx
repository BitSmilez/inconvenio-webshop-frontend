import {MemoryRouter as TestRouter} from 'react-router-dom';
import ImprintContent from "./ImprintContent";
import {mount} from "cypress/react18";


describe("ImprintContent", () => {
    it("should mount", () => {
        mount(
            <TestRouter>
                <ImprintContent/>
            </TestRouter>);
    });
    it("should have a back to shop link", () => {
        mount(
            <TestRouter>
                <ImprintContent/>
            </TestRouter>);
        cy.get("li > a").should("exist");
        cy.get("li > a").should("have.text", "Back to Shop");
    });
});