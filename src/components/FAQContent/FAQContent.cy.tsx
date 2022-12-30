import FAQContent from "./FAQContent";
import {mount} from "cypress/react18";


describe("FAQContent", () => {
    it("should mount", () => {
        mount(<FAQContent />);
    });
});