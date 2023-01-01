import AdBanner from "./AdBanner";
import {mount} from "cypress/react18";

const message = "FREE SHIPPING ON ORDERS OVER $100";
describe("AdBanner", () => {
    it("should mount", () => {
        mount(
            <AdBanner bannerMessage={message}/>
        )
    });
    it("should have the correct message", () => {
        mount(
            <AdBanner bannerMessage={message}/>
        );
        cy.get("div").should("contain", message);
    });
    it("should have the correct class", () => {
        mount(
            <AdBanner bannerMessage={message}/>
        );
        cy.get("div").should("have.class", "ad-banner");
    });
});