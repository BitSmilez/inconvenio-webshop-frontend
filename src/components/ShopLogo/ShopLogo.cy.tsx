import ShopLogo from "./ShopLogo";
import {MemoryRouter as TestRouter} from 'react-router-dom';

const shopName = "INCONVENIO";

describe("ShopLogo", () => {
    it("should mount", () => {
        cy.mount(
            <TestRouter>
                <ShopLogo name={shopName}/>
            </TestRouter>);
    });

    it("should have the correct name", () => {
        cy.mount(
            <TestRouter>
                <ShopLogo name={shopName}/>
            </TestRouter>);
        cy.get("h1").should("contain", "INCONVENIO");
    });

    it("should redirect to home page on click", () => {
        cy.mount(
            <TestRouter>
                <ShopLogo name={shopName}/>
            </TestRouter>);
        cy.get("h1").click();
        cy.url().should("include", "/");
    })
});