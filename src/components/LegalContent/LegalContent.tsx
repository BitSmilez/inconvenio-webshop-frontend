import "./LegalContent.css"
import LinkButton from "../LinkButton/LinkButton";
import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";
import shop from "../../data/shopConstants";
const LegalContent = () => {
    return (
        <div className={"legal-content"}>
            <LinkButton URL={"/"} text={"Back to Shop"}/>
            <GenericPageHeadline text={shop.shopName + " Privacy Policy"}/>
            <p>Effective date: December 07, 2022 (not really)</p>
            <p>{shop.shopName} Team ("us", "we", "our") operates the {shop.shopURL} website (the "Service").</p>
            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when
                you use our Service and the choices you have
                associated with that data.
            </p>
            <p>
                We use your data to provide and improve the Service. By using the Service, you agree to the collection
                and use of information in accordance with this policy.
            </p>
            <h2>Information Collection and Use</h2>
            <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
            </p>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information
                that can be used to contact or identify you ("Personal Data"). Personally identifiable information like
                Email address, home address, phone numbers, first and lastname.
            </p>
            <h4>Usage Data</h4>
            <p>
                We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may
                include information such as your browser type, browser version, the pages of our Service that you
                visit, the time and date of your visit, the time spent on those pages, unique device identifiers and
                other diagnostic data. However, we anonymize your Internet Protocol address.
            </p>
            <h4>Tracking and Cookies Data</h4>
            <p>
                We use anonymous cookies to track the activity on our Service and hold certain information.
                <br></br><br></br>
                Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies
                are sent to your browser from a website and stored on your device. Tracking technologies also used are
                beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                <br></br><br></br>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            <h2> Use of Data</h2>
            <p>
                {shop.shopName} Team uses the collected data for various purposes:
                <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>
            </p>
            <h2>Links to other sites</h2>
            <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third party
                link, you will be directed to that third party's site. We strongly advise you to review the Privacy
                Policy of every site you visit.
                <br></br><br></br>
                We have no control over and assume no responsibility for the content, privacy policies or practices of
                any third party sites or services.
            </p>
            <h2>Changes To This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
                <br></br><br></br>
                We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
                effective and update the "effective date" at the top of this Privacy Policy.
                <br></br><br></br>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us:
                <br></br><br></br>
                By email: {shop.shopLegalEmail} <br></br>
                Call us: {shop.shopPhone}
            </p>
        </div>

    )
}

export default LegalContent;