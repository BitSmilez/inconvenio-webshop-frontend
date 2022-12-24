import "./SearchLabel.css";
const SearchLabel = ({text}: { text: string }) => {
    return (
        <h2 className={"search-label"}>{text}</h2>
    )
}

export default SearchLabel;