import SearchLabel from "./SearchLabel";

describe("SearchLabel", () => {
    it("should mount", () => {
        cy.mount(<SearchLabel text={"Test Label"}/>);
    });
    it("should have the correct label", () => {
        cy.mount(<SearchLabel text={"Test Label"}/>);
        cy.get(".search-label").contains("TEST LABEL");
    });
});
