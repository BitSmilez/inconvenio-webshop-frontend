import ProductList from "./ProductList";

describe("ProductList", () => {
    it("should mount", () => {
        cy.mount(<ProductList url={"/"}/>)
    });
    it("should throw an error if there is no valid data (like in this case)", () => {
        cy.mount(<ProductList url={"/"}/>)
        cy.get('.product-container > div').contains("Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON")
    });
});
