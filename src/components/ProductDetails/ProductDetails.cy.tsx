import ProductDetailsButtonArea from "./ProductDetailsButtonArea";
import ProductDetailsDesc from "./ProductDetailsDesc";
import ProductDetailsImage from "./ProductDetailsImage";
import ProductDetailsMainInfos from "./ProductDetailsMainInfos";
import ProductDetailsPriceArea from "./ProductDetailsPriceArea";
import ProductDetailsSideInfos from "./ProductDetailsSideInfos";
import ProductDetailsRating from "./ProductDetailsRating";
import {mount} from "cypress/react18";
import CustomerContextProvider from "../../context/CustomerContext";
import ProductDetails from "./ProductDetails";
import {Provider as AlertProvider} from 'react-alert'

const product_normal = {
    name: "The Product",
    price: 200.00,
    salesPrice: null,
    description: "Product 1 fancy description",
    image: "https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692",
}

describe("ProductDetails Button Area", () => {
    it("should mount", () => {
        mount(<ProductDetailsButtonArea addToCart={null}/>)
    });
    it("should have a add to cart MUI button with a cart icon and a favorite MUI Icon button", () => {
        mount(<ProductDetailsButtonArea addToCart={null}/>);
        cy.get('.MuiButton-root').should("exist");
        cy.get('.MuiIconButton-root').should("exist");
        cy.get('[data-testid="FavoriteBorderIcon"]').should("exist");
        cy.get('[data-testid="AddShoppingCartIcon"]').should("exist");
        cy.get('.MuiButton-root').should("have.text", " ADD TO CART");
    });
});

describe("ProductDetails Desc", () => {
    it("should mount", () => {
        mount(<ProductDetailsDesc productDetailsDesc={"This is a product description."}/>)
    });
    it("should have the correct product description", () => {
        mount(<ProductDetailsDesc productDetailsDesc={"This is a product description."}/>);
        cy.get('.product-desc').should("exist");
        cy.get('.product-desc').should("have.text", "This is a product description.");
    });
});

describe("ProductDetails Image", () => {
    it("should mount", () => {
        mount(<ProductDetailsImage image={"https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692"}
                                   alt={"Product Image"}/>)
    });
    it("should have the correct image and alt text (image should not load)", () => {
        mount(<ProductDetailsImage image={"https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692"}
                                   alt={"Product Image"}/>);
        cy.get('.product-details-image').should("exist");
        cy.get('.product-details-image').should("exist");
        cy.get('.product-details-image').should("have.attr", "src", "https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692");
        cy.get('.product-details-image').should("have.attr", "alt", "Product Image");
    });
});

describe("ProductDetails Main Infos", () => {
    it("should mount", () => {
        mount(<ProductDetailsMainInfos productName={"Product Name"} productCategory={"Product Category"}/>)
    });
    it("should have the correct product name and category", () => {
        mount(<ProductDetailsMainInfos productName={"Product Name"} productCategory={"Product Category"}/>);
        cy.get('.product-name').should("exist");
        cy.get('.product-name').should("have.text", " Product Name");
        cy.get('.category-label').should("exist");
        cy.get('.category-label').should("have.text", "Product Category");
    });
});

describe("ProductDetails PriceArea", () => {
    beforeEach(() => {
        mount(<ProductDetailsPriceArea price={100} salesPrice={50} changeQuantity={null} quantity={1}/>)

    });

    it("should mount", () => {
    });

    it("should have the correct price and sales price", () => {
        cy.get('.product-item-price-if-on-sale').should("exist");
        cy.get('.product-item-price-if-on-sale').should("have.text", "$100.00");
        cy.get('.product-item-sales-price').should("exist");
        cy.get('.product-item-sales-price').should("have.text", "$50.00");
    });
    it("old price should be crossed out", () => {
        cy.get('.product-item-price-if-on-sale').should("have.css", "text-decoration", "line-through solid rgb(255, 0, 0)");
    });
});

describe("ProductDetails Side Infos", () => {
    it("should mount", () => {
        mount(<ProductDetailsSideInfos category={"Category"} designer={"Designer"} country={"Country"}
                                       material={"Material"}/>)
    });
    it("should have four headlines and four paragraphs", () => {
        mount(<ProductDetailsSideInfos category={"Category"} designer={"Designer"} country={"Country"}
                                       material={"Material"}/>);
        cy.get('.product-details-other-infos').should("exist");
        cy.get('.product-details-other-infos > div > h3').should("have.length", 4);
        cy.get('.product-details-other-infos > div > p').should("have.length", 4);
    });
});

describe("ProductDetails Rating", () => {
    it("should mount", () => {
        mount(<ProductDetailsRating rating={4}/>)
    });
    it("should have a rating of 4", () => {
        mount(<ProductDetailsRating rating={4}/>);
        cy.get('.MuiRating-root').should("exist");
        cy.get('.MuiRating-root').should("have.attr", "aria-label", "4 Stars");
    });
});

describe("ProductDetails", () => {
    beforeEach(() => {
        mount(
            <AlertProvider>
                <CustomerContextProvider>
                    <ProductDetails product={product_normal}/>
                </CustomerContextProvider>
            </AlertProvider>
        )
    });
    it("should mount", () => {});

    it("should have a quantity area with a plus and minus button", () => {
        cy.get('.product-item-quantity').should("exist");
        cy.get('.product-item-quantity > p').should("exist");
        cy.get('[data-testid="AddIcon"]').should("exist");
        cy.get('[data-testid="RemoveIcon"]').should("exist");
    });
    it("click on plus button should increase quantity by 1", () => {
        cy.get('.product-item-quantity > p').should("have.text", "QTY:  1 ");
        cy.get('[data-testid="AddIcon"]').click();
        cy.get('.product-item-quantity > p').should("have.text", "QTY:  2 ");
    });
    it("click on minus button should decrease quantity by 1", () => {
        cy.intercept('http://localhost:8081/cart/*', {})
        cy.get('.product-item-quantity > p').should("have.text", "QTY:  1 ");
        cy.get('[data-testid="AddIcon"]').click();
        cy.get('.product-item-quantity > p').should("have.text", "QTY:  2 ");
        cy.get('[data-testid="RemoveIcon"]').click();
        cy.get('.product-item-quantity > p').should("have.text", "QTY:  1 ");
    });
    it("click on minus button should not decrease quantity below 1", () => {
        cy.intercept('http://localhost:8081/cart/*', {})
        cy.get('.product-item-quantity > p').should("have.text", "QTY:  1 ");
        cy.get('[data-testid="RemoveIcon"]').click();
        cy.get('.product-item-quantity > p').should("have.text", "QTY:  1 ");
    });
});
