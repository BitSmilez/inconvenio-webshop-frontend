import ProductList from "./ProductList";

describe("ProductList", () => {
    it("should mount", () => {
        cy.mount(<ProductList label={"Products"} url={"/"}/>)
    });
    it("should throw an error if there is no valid data (like in this case)", () => {
        cy.mount(<ProductList label={"Products"} url={"/"}/>)
        cy.get('.product-container > div').contains("Sorry, no products found :(")
    });
});
