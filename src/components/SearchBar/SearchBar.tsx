import React from 'react';
import "./SearchBar.css";

import { useNavigate} from 'react-router-dom';
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate(`/products/search/${searchQuery}`);
    };

    return (
        <div className="search-bar">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />&nbsp;
             <button onClick={handleSearch}>Search</button>
        </div>
    );
}



export default SearchBar;