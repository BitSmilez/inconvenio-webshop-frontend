import ProductDetailsButtonArea from "./ProductDetailsButtonArea";
import ProductDetailsDesc from "./ProductDetailsDesc";
import ProductDetailsImage from "./ProductDetailsImage";
import ProductDetailsMainInfos from "./ProductDetailsMainInfos";
import ProductDetailsPriceArea from "./ProductDetailsPriceArea";
import ProductDetailsSideInfos from "./ProductDetailsSideInfos";
import ProductDetailsRating from "./ProductDetailsRating";

describe("ProductDetails Button Area", () => {
    it("should mount", () => {
        cy.mount(<ProductDetailsButtonArea/>)
    });
    it("should have a add to cart MUI button with a cart icon and a favorite MUI Icon button", () => {
        cy.mount(<ProductDetailsButtonArea/>);
        cy.get('.MuiButton-root').should("exist");
        cy.get('.MuiIconButton-root').should("exist");
        cy.get('[data-testid="FavoriteBorderIcon"]').should("exist");
        cy.get('[data-testid="AddShoppingCartIcon"]').should("exist");
        cy.get('.MuiButton-root').should("have.text", " ADD TO CART");
    });
});

describe("ProductDetails Desc", () => {
    it("should mount", () => {
        cy.mount(<ProductDetailsDesc productDetailsDesc={"This is a product description."}/>)
    });
    it("should have the correct product description", () => {
        cy.mount(<ProductDetailsDesc productDetailsDesc={"This is a product description."}/>);
        cy.get('.product-desc').should("exist");
        cy.get('.product-desc').should("have.text", "This is a product description.");
    });
});

describe("ProductDetails Image", () => {
    it("should mount", () => {
        cy.mount(<ProductDetailsImage image={"https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692"}
                                      alt={"Product Image"}/>)
    });
    it("should have the correct image and alt text (image should not load)", () => {
        cy.mount(<ProductDetailsImage image={"https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692"}
                                      alt={"Product Image"}/>);
        cy.get('.product-details-image').should("exist");
        cy.get('.product-details-image').should("exist");
        cy.get('.product-details-image').should("have.attr", "src", "https://ucarecdn.com/8f73e3b8-bc9c-46d1-a0f7-1bad02629692");
        cy.get('.product-details-image').should("have.attr", "alt", "Product Image");
    });
});

describe("ProductDetails Main Infos", () => {
    it("should mount", () => {
        cy.mount(<ProductDetailsMainInfos productName={"Product Name"} productCategory={"Product Category"}/>)
    });
    it("should have the correct product name and category", () => {
        cy.mount(<ProductDetailsMainInfos productName={"Product Name"} productCategory={"Product Category"}/>);
        cy.get('.product-name').should("exist");
        cy.get('.product-name').should("have.text", " Product Name");
        cy.get('.category-label').should("exist");
        cy.get('.category-label').should("have.text", "Product Category");
    });
});

describe("ProductDetails PriceArea", () => {
    it("should mount", () => {
        cy.mount(<ProductDetailsPriceArea price={100} salesPrice={50}/>)
    });
    it("should have the correct price and sales price", () => {
        cy.mount(<ProductDetailsPriceArea price={100} salesPrice={50}/>);
        cy.get('.product-item-price-if-on-sale').should("exist");
        cy.get('.product-item-price-if-on-sale').should("have.text", "$100.00");
        cy.get('.product-item-sales-price').should("exist");
        cy.get('.product-item-sales-price').should("have.text", "$50.00");
    });
    it("old price should be crossed out", () => {
        cy.mount(<ProductDetailsPriceArea price={100} salesPrice={50}/>);
        cy.get('.product-item-price-if-on-sale').should("have.css", "text-decoration", "line-through solid rgb(255, 0, 0)");
    });
    it("should have a quantity area with a plus and minus button", () => {
        cy.mount(<ProductDetailsPriceArea price={100} salesPrice={50}/>);
        cy.get('.product-item-quantity').should("exist");
        cy.get('.product-item-quantity > p').should("exist");
        cy.get('[data-testid="AddIcon"]').should("exist");
        cy.get('[data-testid="RemoveIcon"]').should("exist");
    });
});

describe("ProductDetails Side Infos", () => {
    it("should mount", () => {
        cy.mount(<ProductDetailsSideInfos category={"Category"} designer={"Designer"} country={"Country"}
                                          material={"Material"}/>)
    });
    it("should have four headlines and four paragraphs", () => {
        cy.mount(<ProductDetailsSideInfos category={"Category"} designer={"Designer"} country={"Country"}
                                          material={"Material"}/>);
        cy.get('.product-details-other-infos').should("exist");
        cy.get('.product-details-other-infos > div > h3').should("have.length", 4);
        cy.get('.product-details-other-infos > div > p').should("have.length", 4);
    });
});

describe("ProductDetails Rating", () => {
    it("should mount", () => {
        cy.mount(<ProductDetailsRating rating={4}/>)
    });
it("should have a rating of 4", () => {
        cy.mount(<ProductDetailsRating rating={4}/>);
        cy.get('.MuiRating-root').should("exist");
        cy.get('.MuiRating-root').should("have.attr", "aria-label", "4 Stars");
    });
});
