import GenericPageHeadline from "./GenericPageHeadline";
import {mount} from "cypress/react18";


describe("GenericPageHeadline", () => {
    it("should mount", () => {
        mount(<GenericPageHeadline text={"Hello Headline"} />)
    });
    it("should have the correct text", () => {
        mount(<GenericPageHeadline text={"Hello Headline"} />)
        cy.get("h1").contains("Hello Headline")
    });
});
