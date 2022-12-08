import "./Imprint.css"

const Imprint = () => {


    return (
    <div className="impressum-container">
        <li className={"back-to-shop-list-elem"}><a className={"back-to-shop-link"} href="/">Back to Shop</a></li>
        <div className="impressum-content">

            <h1>Impressum</h1><p>Angaben gemäß § 5 TMG</p><p>Max Muster <br />
            Musterweg<br />
            12345 Musterstadt <br />
        </p><p> <strong>Vertreten durch: </strong><br />
            Max Muster<br />
        </p><p><strong>Kontakt:</strong> <br />
            Telefon: 01234-789456<br />
            Fax: 1234-56789<br />
            E-Mail: <a href="mailto:max@muster.de">max@muster.de</a><br /></p><p><strong>Registereintrag: </strong><br />
            Eintragung im Registergericht: Musterstadt<br />
            Registernummer: 12345<br /></p><p><strong>Umsatzsteuer-ID: </strong> <br />
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.<br /><br />
            <strong>Wirtschafts-ID: </strong><br />
            Musterwirtschaftsid<br />
        </p><p><strong>Aufsichtsbehörde:</strong><br />
            Musteraufsicht Musterstadt<br /></p><br />
            Website Impressum von <a href="https://www.impressum-generator.de">impressum-generator.de</a>
        </div>

    </div>




    )
}
export default Imprint;
