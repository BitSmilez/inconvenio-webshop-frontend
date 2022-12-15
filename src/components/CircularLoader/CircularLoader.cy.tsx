import CircularLoader from "./CircularLoader";

describe("CircularLoader", () => {
    it("should mount", () => {
        cy.mount(<CircularLoader />)
    });
    it("should have a container", () => {
        cy.mount(<CircularLoader />)
        cy.get('.circular-loader-container').should("exist").and("be.visible")
    });
    it("should be visible", () => {
        cy.mount(<CircularLoader />)
        cy.get('.MuiCircularProgress-svg').should("exist").and("be.visible")
    });
});
