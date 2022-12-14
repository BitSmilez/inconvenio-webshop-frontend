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
                <li className={"footer-link"}><a href="/refunds">Refund Policy</a></li>
                <li className={"footer-link"}><a href="/faq">FAQ</a></li>
                <li className={"footer-link"}><a href="/privacy">Legal</a></li>
                <li className={"footer-link"}><a href="/imprint">Imprint</a></li>
                <li className={"footer-link"}><a href="/terms">ToS</a></li>
            </ul>
        </div>
    );
}

export default FooterLinks;