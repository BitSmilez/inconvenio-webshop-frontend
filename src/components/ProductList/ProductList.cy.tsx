import ProductList from "./ProductList";
import {mount} from "cypress/react18";


describe("ProductList", () => {
    it("should mount", () => {
        mount(<ProductList label={"Products"} url={"/"} callback={null}/>)
    });
    it("should throw an error if there is no valid data (like in this case)", () => {
        mount(<ProductList label={"Products"} url={"/"} callback={null}/>)
        cy.get('.product-container > div').contains("Sorry, no products found :(")
    });
});
