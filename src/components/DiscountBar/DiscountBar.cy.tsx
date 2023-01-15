import DiscountBar from "./DiscountBar";
import {mount} from "cypress/react18";
import {Provider as AlertProvider} from 'react-alert'


describe("DiscountBar", () => {
    beforeEach(() => {
        mount(
            <AlertProvider template={null}>
                <DiscountBar/>
            </AlertProvider>
        )
    })

    it("should mount", () => {
    })

    it("should let the user input a discount", () => {
        cy.get("input").type("104566")
        cy.get("input").should("have.value", "104566")
    })
});