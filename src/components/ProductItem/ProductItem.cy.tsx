import ProductItem from "./ProductItem";

const product_normal = {
    name: "The Product",
    price: 200.00,
    salesPrice: null,
    description: "Product 1 fancy description",
    image: "https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692",
}
const product_with_sales_price = {
    name: "The Product on Sale",
    price: 200.00,
    salesPrice: 100.00,
    description: "Product 2 fancy description",
    image: "https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692",
}

describe("Normal ProductItem", () => {
    it("should mount", () => {
        cy.mount(<ProductItem product={product_normal}/>)
    });
    it("should have the correct name", () => {
        cy.mount(<ProductItem product={product_normal}/>)
        cy.get('.product-item-name').contains("The Product")
    });
    it("should have the correct description", () => {
        cy.mount(<ProductItem product={product_normal}/>)
        cy.get('.product-item-desc').contains("Product 1 fancy description")
    });
    it("should have an image area (does not have to load)", () => {
        cy.mount(<ProductItem product={product_normal}/>)
        cy.get('.product-image').should("be.visible")

    });
    it("should have the correct class for the price", () => {
        cy.mount(<ProductItem product={product_normal}/>)
        cy.get('.product-item-price-normal').should('exist')
    });
    it("should have the correct price", () => {
        cy.mount(<ProductItem product={product_normal}/>)
        cy.get('.product-item-price-normal').contains("200.00")
    });
    it("should not have a sales price", () => {
        cy.mount(<ProductItem product={product_normal}/>)
        cy.get('.product-item-sales-price').should('not.exist')
    });
});

describe("ProductItem with sales price", () => {
    it("should mount", () => {
        cy.mount(<ProductItem product={product_with_sales_price}/>)
    });
    it("should have the correct class for the price", () => {
        cy.mount(<ProductItem product={product_with_sales_price}/>)
        cy.get('.product-item-price-if-on-sale').should('exist')
    });
    it("should have the correct sales price in green color", () => {
        cy.mount(<ProductItem product={product_with_sales_price}/>)
        cy.get('.product-item-sales-price')
            .contains("100.00")
            .and('have.css', 'color', 'rgb(0, 128, 0)')

    });
    it("should display the old price correctly and in red color", () => {
        cy.mount(<ProductItem product={product_with_sales_price}/>)
        cy.get('.product-item-price-if-on-sale')
            .should('exist')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
            .and("contain", "200.00")
    });
    it("should have the old price crossed out", () => {
        cy.mount(<ProductItem product={product_with_sales_price}/>)
        cy.get('.product-item-price-if-on-sale').should('have.css', 'text-decoration-line', 'line-through')
    });
});

