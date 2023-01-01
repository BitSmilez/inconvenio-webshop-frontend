import SearchBar from "./SearchBar";
import {MemoryRouter as TestRouter} from "react-router-dom";
import {mount} from "cypress/react18";


describe("SearchBar", () => {
    it("should mount", () => {
        mount(
            <TestRouter>
                <SearchBar/>
            </TestRouter>);
    });
});