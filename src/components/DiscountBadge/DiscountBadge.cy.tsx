import DiscountBadge from "./DiscountBadge";

describe("DiscountBadge", () => {
    it("should mount", () => {
        cy.mount(<DiscountBadge price={200} discountedPrice={100}/>)
    });
    it("should have the correct discount percentage in the badge", () => {
        cy.mount(<DiscountBadge price={200} discountedPrice={100}/>)
        cy.get('.discount-badge').contains(Math.floor((200 - 100) / 200 * 100))
    });
});
