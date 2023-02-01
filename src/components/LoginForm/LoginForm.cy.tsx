import {mount} from "cypress/react18";
import CustomerContextProvider from "../../context/CustomerContext";
import {Provider as AlertProvider} from 'react-alert'
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
    beforeEach(() => {
        cy.intercept('http://localhost:8081/cart/*', {})
        mount(
            <CustomerContextProvider>
                <AlertProvider>
                    <LoginForm />
                </AlertProvider>
            </CustomerContextProvider>
        );
    });

    it("should mount", () => {});

    it("should have a Login title", () => {
        cy.get("h1").should("exist")
        cy.get("h1").contains("LOGIN TO INCONVENIO")
    });

    it("should have a login button", () => {
        cy.get("button").should("exist")
        cy.get("button").contains("LOGIN")
    });

    it("should have a link to the register page", () => {
        cy.get("a").should("exist")
        cy.get("a").contains("Register here")
    });

    it("should have a form with 2 inputs, email and password", () => {
        cy.get("form").should("exist")
        cy.get("form").find("input").should("have.length", 2)
        cy.get("form").find("input").eq(0).should("have.attr", "name", "email")
        cy.get("form").find("input").eq(1).should("have.attr", "name", "password")
    });

    it("clicking the login button should not submit if the form is not filled out", () => {
        cy.get("button").click()
        cy.get("form").should("exist")
    });
});