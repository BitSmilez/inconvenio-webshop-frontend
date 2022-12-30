import DiscountBadge from "./DiscountBadge";
import {mount} from "cypress/react18";


describe("DiscountBadge", () => {
    it("should mount", () => {
        mount(<DiscountBadge price={200} discountedPrice={100}/>)
    });
    it("should have the correct discount percentage in the badge", () => {
        mount(<DiscountBadge price={200} discountedPrice={100}/>)
        cy.get('.discount-badge').contains(Math.floor((200 - 100) / 200 * 100))
    });
});
