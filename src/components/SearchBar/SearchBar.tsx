import React from 'react';
import "./SearchBar.css";

import { useNavigate} from 'react-router-dom';
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate(`/products/search/${searchQuery}`);
    };
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
        return (
            <div className="search-bar">
                <input type="text" onKeyDown={handleKeyDown} value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}/>&nbsp;
                <button onClick={handleSearch}>Search</button>
            </div>
        );


}

export default SearchBar;