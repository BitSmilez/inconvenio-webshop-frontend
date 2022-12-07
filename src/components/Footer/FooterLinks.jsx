import "./Footer.css"

const FooterLinks = () => {
    return (
        <div className="footer-links">
            <div className={"footer-links-headline"}>
                <h2 className={"footer-headlines"}>USEFUL LINKS/</h2>
            </div>
            <ul className={"footer-links-list"}>
                <li className={"footer-link"}><a href="/">Home</a></li>
                <li className={"footer-link"}><a href="/cart">Cart</a></li>
                <li className={"footer-link"}><a href="/wishlist">Wishlist</a></li>
                <li className={"footer-link"}><a href="/paymentinfo">Payments</a></li>
                <li className={"footer-link"}><a href="/shippinginfo">Shipping</a></li>
                <li className={"footer-link"}><a href="/newsletter">Newsletter</a></li>
                <li className={"footer-link"}><a href="/imprint">Imprint</a></li>
            </ul>
        </div>
    );
}

export default FooterLinks;