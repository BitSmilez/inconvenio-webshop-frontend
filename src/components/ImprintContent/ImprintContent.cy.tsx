import {MemoryRouter as TestRouter} from 'react-router-dom';
import ImprintContent from "./ImprintContent";

describe("ImprintContent", () => {
    it("should mount", () => {
        cy.mount(
            <TestRouter>
                <ImprintContent/>
            </TestRouter>);
    });
    it("should have a back to shop link", () => {
        cy.mount(
            <TestRouter>
                <ImprintContent/>
            </TestRouter>);
        cy.get("li > a").should("exist");
        cy.get("li > a").should("have.text", "Back to Shop");
    });
});