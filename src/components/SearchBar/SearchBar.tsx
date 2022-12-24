import React from 'react';
import "./SearchBar.css";

import { useNavigate} from 'react-router-dom';
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigate = useNavigate()
    const [errorState, setErrorState] = React.useState(false);

    const handleSearch = () => {
        if(searchQuery.length > 0 && searchQuery.replace(/\s/g, "").length) {
            setErrorState(false);
            navigate(`/products/search/${searchQuery.trim().replace(/[^a-z0-9\s]/gi, '')}`);
        }
        else {
            setErrorState(true);
        }
    };
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
        return (
            <div className="search-bar">
                <input className={!errorState ? "search-bar-input" : "search-bar-input-on-error"} type="text" onKeyDown={handleKeyDown} value={searchQuery} placeholder={"Search INCONVENIO..."}
                       onChange={e => setSearchQuery(e.target.value)}/>&nbsp;
                <button onClick={handleSearch}>Search</button>
            </div>
        );


}

export default SearchBar;