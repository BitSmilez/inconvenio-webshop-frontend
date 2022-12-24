import SearchBar from "./SearchBar";
import {MemoryRouter as TestRouter} from "react-router-dom";

describe("SearchBar", () => {
    it("should mount", () => {
        cy.mount(
            <TestRouter>
                <SearchBar/>
            </TestRouter>);
    });
});