import CircularLoader from "./CircularLoader";
import {mount} from "cypress/react18";

describe("CircularLoader", () => {
    it("should mount", () => {
        mount(<CircularLoader />)
    });
    it("should have a container", () => {
        mount(<CircularLoader />)
        cy.get('.circular-loader-container').should("exist").and("be.visible")
    });
    it("should be visible", () => {
        mount(<CircularLoader />)
        cy.get('.MuiCircularProgress-svg').should("exist").and("be.visible")
    });
});
