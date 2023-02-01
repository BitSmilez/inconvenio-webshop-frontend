import {mount} from "cypress/react18";
import RegisterForm from "./RegisterForm";

import CustomerContextProvider from "../../context/CustomerContext";
import {Provider as AlertProvider} from 'react-alert'


describe("RegisterForm", () => {
    beforeEach(() => {
        cy.intercept('http://localhost:8081/cart/*', {})
        mount(
            <CustomerContextProvider>
                <AlertProvider>
                    <RegisterForm />
                </AlertProvider>
            </CustomerContextProvider>
        );
    });

    it("should mount", () => {});

    it("should have a Register title", () => {
        cy.get("h1").should("exist")
        cy.get("h1").contains("REGISTER NEW ACCOUNT")
    });
    it("should have a register button", () => {
        cy.get("button").should("exist")
        cy.get("button").contains("REGISTER NEW ACCOUNT")
    });

    it("should have a link to the login page", () => {
        cy.get("a").should("exist")
        cy.get("a").contains("Login here")
    });
    it("should have a form with 4 inputs, firstname, lastname, email and password", () => {
        cy.get("form").should("exist")
        cy.get("form").find("input").should("have.length", 4)
        cy.get("form").find("input").eq(0).should("have.attr", "name", "firstname")
        cy.get("form").find("input").eq(1).should("have.attr", "name", "lastname")
        cy.get("form").find("input").eq(2).should("have.attr", "name", "email")
        cy.get("form").find("input").eq(3).should("have.attr", "name", "password")
    });
    it("clicking the register button should not submit if the form is not filled out", () => {
        cy.get("button").click()
        cy.get("form").should("exist")
    });
});
