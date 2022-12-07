import Footer from "./Footer";
import FooterLinks from "./FooterLinks";
import FooterShippingInfos from "./FooterShippingInfos";
import FooterPaymentInfo from "./FooterPaymentInfo";
import FooterShopInfos from "./FooterShopInfos";

const shopData = {
    shopName: "INCONVENIO",
    address: "1234 Street-Name, City",
    email: "Mail@Address.here",
    phone: "+(123) 456-7890"
}
const footerHeadlines = {
    paymentInfo: "PAYMENT INFORMATION/",
    shippingInfo: "SHIPPING INFORMATION/",
    links: "USEFUL LINKS/"
}

describe("Footer Parent", () => {
    it("should mount", () => {
        cy.mount(<Footer />);
    });
    it("should have four children elements", () => {
        cy.mount(<Footer />);
        cy.get(".footer-container").children().should("have.length", 4);
    });
});

describe("Footer Shop Info", () => {
    it("should mount", () => {
        cy.mount(<FooterShopInfos shopName={shopData.shopName} address={shopData.address} email={shopData.email} phone={shopData.phone}/>);
    });
    it("should have the correct shop name", () => {
        cy.mount(<FooterShopInfos shopName={shopData.shopName} address={shopData.address} email={shopData.email} phone={shopData.phone}/>);
        cy.get(".footer-shop-headline").should("contain", shopData.shopName);
    });
    it("should have the correct headline font", () => {
        cy.mount(<FooterShopInfos shopName={shopData.shopName} address={shopData.address} email={shopData.email} phone={shopData.phone}/>);
        cy.get(".footer-shop-headline").should("have.css", "font-family", "Righteous, cursive");
    });
});

describe("Footer Links", () => {
    it("should mount", () => {
        cy.mount(<FooterLinks />);
    });
    it("should have the correct number of links", () => {
        cy.mount(<FooterLinks/>);
        cy.get(".footer-links-list").children().should("have.length", 7);
    });

    it("should have the correct headline", () => {
        cy.mount(<FooterLinks/>);
        cy.get(".footer-headlines").should("contain", footerHeadlines.links);
    });
    // TODO: Test if links are working as soon as we have the pages available

});

describe("Footer Shipping Info", () => {
    it("should mount", () => {
        cy.mount(<FooterShippingInfos/>);
    });

    it("should have the correct headline", () => {
        cy.mount(<FooterShippingInfos/>);
        cy.get(".footer-headlines").should("contain", footerHeadlines.shippingInfo);
    });
});

describe("Footer Payment Info", () => {
    it("should mount", () => {
        cy.mount(<FooterPaymentInfo/>);
    });

    it("should have the correct headline", () => {
        cy.mount(<FooterPaymentInfo/>);
        cy.get(".footer-headlines").should("contain", footerHeadlines.paymentInfo);
    });

    it("should have the correct number of payment icons", () => {
        cy.mount(<FooterPaymentInfo/>);
        cy.get(".footer-payment-icons").children().should("have.length", 4);
    });

});

