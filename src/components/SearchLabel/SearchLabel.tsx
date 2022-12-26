import "./SearchLabel.css";
const SearchLabel = ({text}: { text: string }) => {
    return (
        <h2 className={"search-label"}>{text.toUpperCase()}</h2>
    )
}

export default SearchLabel;