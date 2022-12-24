import NotifyDiv from "./NotifyDiv";

describe("NotifyDiv", () => {
    it("should mount", () => {
        cy.mount(<NotifyDiv notifyMessage={"Test Notify"}/>);
    });
    it("should have the correct message", () => {
        cy.mount(<NotifyDiv notifyMessage={"Test Notify"}/>);
        cy.get(".notify-div").contains("Test Notify");
    });
});
