import TermsContent from "./TermsContent";
import {mount} from "cypress/react18";


describe("TermsContent", () => {
    it("should mount", () => {
        mount(<TermsContent />)
    });
    it("should have a Terms & Conditions title", () => {
        mount(<TermsContent />);
        cy.get("h1").should("exist");
        cy.get("h1").should("have.text", "INCONVENIO Terms & Conditions");
    });
    it("should have a link to the privacy policy that redirects to it", () => {
        mount(<TermsContent />);
        cy.get("li > a").eq(1).should("exist");
        cy.get("li > a").eq(1).should("have.text", "INCONVENIO Privacy Policy");
        cy.get("li > a").eq(1).should("have.attr", "href", "/privacy");
    });
    it("should have a back to shop link that redirects to the home page", () => {
        mount(<TermsContent />);
        cy.get("li > a").eq(0).should("exist");
        cy.get("li > a").eq(0).should("have.text", "Back to Shop");
        cy.get("li > a").eq(0).should("have.attr", "href", "/");
    });
});