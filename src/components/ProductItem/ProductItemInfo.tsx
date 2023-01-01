import "./ProductItem.css"

const ProductItemInfo = ({name, desc}: {name: string, desc: string}) => {
    return (
        <>
            <h3 className={"product-item-name"}>{name}</h3>
            <p className={"product-item-desc"}>{desc}</p>
        </>
    )
}

export default ProductItemInfo;