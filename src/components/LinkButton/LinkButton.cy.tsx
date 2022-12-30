import LinkButton from "./LinkButton";
import {mount} from "cypress/react18";


describe("LinkButton", () => {
    it("should mount", () => {
        mount(<LinkButton URL={"/"} text={"Hello Button"} />)
    });
    it("should have the correct text", () => {
        mount(<LinkButton URL={"/"} text={"Hello Button"} />)
        cy.get("li > a").contains("Hello Button")
    });
    it("should have the correct URL", () => {
        mount(<LinkButton URL={"/"} text={"Hello Button"} />)
        cy.get("li > a").should("have.attr", "href", "/")
    });
    it("should redirect to the correct URL", () => {
        mount(<LinkButton URL={"/legal"} text={"Hello Button"} />)
        cy.get("li > a").click()
        cy.location('pathname').should('eq', '/legal')
    });
});
