import NotifyDiv from "./NotifyDiv";
import {mount} from "cypress/react18";


describe("NotifyDiv", () => {
    it("should mount", () => {
        mount(<NotifyDiv notifyMessage={"Test Notify"}/>);
    });
    it("should have the correct message", () => {
        mount(<NotifyDiv notifyMessage={"Test Notify"}/>);
        cy.get(".notify-div").contains("Test Notify");
    });
});
