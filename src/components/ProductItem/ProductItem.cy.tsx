import ProductItem from "./ProductItem";
import {MemoryRouter as TestRouter} from 'react-router-dom';
import CustomerContextProvider from "../../context/CustomerContext";
import {Provider as AlertProvider} from 'react-alert'


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

const discount = Math.floor((product_with_sales_price.price - product_with_sales_price.salesPrice) / product_with_sales_price.price * 100)

describe("Normal ProductItem", () => {
    beforeEach(() => {
        cy.mount(
            <AlertProvider>
                <CustomerContextProvider>
                    <TestRouter>
                        <ProductItem product={product_normal}/>
                    </TestRouter>
                </CustomerContextProvider>
            </AlertProvider>
        )
    })

    it("should mount", () => {});

    it("should have the correct name", () => {

        cy.get('.product-item-name').contains("The Product")
    });

    it("should have the correct description", () => {

        cy.get('.product-item-desc').contains("Product 1 fancy description")
    });

    it("should have an image area (does not have to load)", () => {

        cy.get('.product-image').should("be.visible")

    });

    it("should have the correct class for the price", () => {

        cy.get('.product-item-price-normal').should('exist')
    });

    it("should have the correct price", () => {

        cy.get('.product-item-price-normal').contains("200.00")
    });

    it("should not have a sales price", () => {

        cy.get('.product-item-sales-price').should('not.exist')
    });
});

describe("ProductItem with sales price", () => {
    beforeEach(() => {
        cy.mount(
            <AlertProvider>
                <CustomerContextProvider>
                    <TestRouter>
                        <ProductItem product={product_with_sales_price}/>
                    </TestRouter>
                </CustomerContextProvider>
            </AlertProvider>
        )
    })

    it("should mount", () => {});

    it("should have the correct class for the price", () => {

        cy.get('.product-item-price-if-on-sale').should('exist')
    });

    it("should have the correct sales price in green color", () => {

        cy.get('.product-item-sales-price')
            .contains("100.00")
            .and('have.css', 'color', 'rgb(0, 128, 0)')

    });
    it("should display the old price correctly and in red color", () => {

        cy.get('.product-item-price-if-on-sale')
            .should('exist')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
            .and("contain", "200.00")
    });
    it("should have the old price crossed out", () => {

        cy.get('.product-item-price-if-on-sale').should('have.css', 'text-decoration-line', 'line-through')
    });
    it("should have a discount badge", () => {

        cy.get('.discount-badge').should('exist')
    });
    it("should have the correct discount percentage in the badge", () => {

        cy.get('.discount-badge').contains(discount)
    });
});

