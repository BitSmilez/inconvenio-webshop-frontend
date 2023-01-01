import SearchLabel from "./SearchLabel";
import {mount} from "cypress/react18";


describe("SearchLabel", () => {
    it("should mount", () => {
        mount(<SearchLabel text={"Test Label"}/>);
    });
    it("should have the correct label", () => {
        mount(<SearchLabel text={"Test Label"}/>);
        cy.get(".search-label").contains("TEST LABEL");
    });
});
