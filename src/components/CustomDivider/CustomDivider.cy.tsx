import CustomDivider from "./CustomDivider";
import {mount} from "cypress/react18";

describe("CustomDivider", () => {
    it("should mount", () => {
        mount(<CustomDivider color={"FFFFFF"}/>)
    });
    it("should have the correct color", () => {
        mount(<CustomDivider color={"FFFFFF"}/>)
        cy.get('hr').should("have.css", "background-color", "rgba(0, 0, 0, 0)")
    });
});