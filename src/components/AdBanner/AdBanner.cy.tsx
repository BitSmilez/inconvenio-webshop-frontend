import AdBanner from "./AdBanner";

const message = "FREE SHIPPING ON ORDERS OVER $100";
describe("AdBanner", () => {
    it("should mount", () => {
        cy.mount(
            <AdBanner bannerMessage={message}/>
        )
    });
    it("should have the correct message", () => {
        cy.mount(
            <AdBanner bannerMessage={message}/>
        );
        cy.get("div").should("contain", message);
    });
    it("should have the correct class", () => {
        cy.mount(
            <AdBanner bannerMessage={message}/>
        );
        cy.get("div").should("have.class", "ad-banner");
    });
});