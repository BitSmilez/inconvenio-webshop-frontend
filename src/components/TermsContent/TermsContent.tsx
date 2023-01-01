import "./TermsContent.css"
import LinkButton from "../LinkButton/LinkButton";
import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";
import {shopConstants as shop} from "../../utils/constants/shopConstants";

const TermsContent = () => {
    return (
        <>
            <div className="terms-content-container">
                <LinkButton URL={"/"} text={"Back to Shop"}/>
                <GenericPageHeadline text={shop.shopName + " Terms & Conditions"}/>
                <p>
                    These terms and conditions outline the rules and regulations for the use of the {shop.shopName}
                    Website, located at {shop.shopURL}.
                    <br></br>
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use
                    the
                    {shop.shopName} shop if you do not agree to take all of the terms and conditions stated on this page.
                    <br></br>
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                    Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website
                    and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and
                    “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves.
                </p>
                <h3>Cookies</h3>
                <p>
                    We employ the use of cookies. By accessing the {shop.shopName} shop, you agreed to use cookies in
                    agreement with the {shop.shopName} Privacy Policy.
                    <br></br>
                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies
                    are used by our website to enable the functionality of certain areas to make it easier for people
                    visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </p>
                <h3>License</h3>
                <p>
                    Unless otherwise stated, {shop.shopName} and/or its licensors own the intellectual property rights for
                    all material on {shop.shopName} shop. All intellectual property rights are reserved. You may access this
                    from {shop.shopName} shop for your own personal use subjected to restrictions set in these terms and
                    conditions.
                    <br></br>
                    You must not:
                </p>
                <ul>
                    <li>Republish material from {shop.shopName} shop</li>
                    <li>Sell, rent or sub-license material from {shop.shopName} shop</li>
                    <li>Reproduce, duplicate or copy material from {shop.shopName} shop</li>
                    <li>Redistribute content from {shop.shopName} shop</li>
                </ul>
                <h3>Hyperlinking to our Content</h3>
                <p>
                    The following organizations may link to our Website without prior written approval:
                </p>
                <ul>
                    <li>Government agencies;</li>
                    <li>Search engines;</li>
                    <li>News organizations;</li>
                    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to
                        the Websites of other listed businesses; and
                    </li>
                    <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping
                        malls, and charity fundraising groups which may not hyperlink to our Web site.
                    </li>
                </ul>
                <p>
                    These organizations may link to our home page, to publications or to other Website information so
                    long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement
                    or approval of the linking party and its products and/or services; and (c) fits within the context of
                    the linking party’s site.
                </p>
                <h3>iFrames</h3>
                <p>
                    Without prior approval and written permission, you may not create frames around our Webpages that
                    alter in any way the visual presentation or appearance of our Website.
                </p>
                <h3>Privacy</h3>
                <p>
                    Please read our: <LinkButton URL={"/privacy"} text={shop.shopName + " Privacy Policy"}/>
                </p>
                <h3>Reservation of Rights</h3>
                <p>
                    We reserve the right to request that you remove all links or any particular link to our Website. You
                    approve to immediately remove all links to our Website upon request. We also reserve the right to
                    amen these terms and conditions and it’s linking policy at any time. By continuously linking to our
                    Website, you agree to be bound to and follow these linking terms and conditions.
                </p>
                <h3>Removal of links from our website</h3>
                <p>
                    If you find any link on our Website that is offensive for any reason, you are free to contact and
                    inform us any moment. We will consider requests to remove links but we are not obligated to or so or
                    to respond to you directly.
                    <br></br>
                    We do not ensure that the information on this website is correct, we do not warrant its completeness
                    or accuracy; nor do we promise to ensure that the website remains available or that the material on
                    the website is kept up to date.
                </p>
            </div>
        </>
    )
}

export default TermsContent;