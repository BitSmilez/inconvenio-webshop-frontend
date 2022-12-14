import "./RefundsContent.css";
import shop from "../../data/shopConstants.js";

import GenericPageHeadline from "../GenericPageHeadline/GenericPageHeadline";
import LinkButton from "../LinkButton/LinkButton";

const RefundsContent = () => {
    return (
        <div className="refunds-content-container">
            <LinkButton URL={"/"} text={"Back to Shop"}/>
            <GenericPageHeadline text={"Return Policy"}/>
            <p><strong> Last updated December 09, 2022</strong></p>
            <br/>
            <p>
                Thank you for your purchase We hope you are happy with your purchase. However, if you are not completely
                satisfied with your purchase, we are here to help. You may return it to us for a full refund only.
                Please
                see below for more information on our return policy.
            </p>
            <h3>RETURNS</h3>
            <p>
                ALl returns must be postmarked wihin fourteen (14) days of the purchase date. All returned items must be
                in new and unused condition, with all original tags and labels attached.
            </p>
            <h3>RETURN PROCESS</h3>
            <p>
                To return an item, please email customer service at support@inconvenio-shop.de to
                obtain a Return Merchandise Authorization (RMA) number. After receiving a RMA
                number, place the item securely in its original packaging and the return form
                provided, then mail your return to the following address:
            </p>
            <ul>
                <li>{shop.shopName} Shop</li>
                <li>Attn: Returns</li>
                <li>RMA#</li>
                <li>{shop.shopStreet}</li>
                <li>{shop.shopCity}, {shop.shopZip}</li>
                <li>{shop.shopCountry}</li>
            </ul>
            <p>
                You may also use the prepaid shipping label enclosed with your package. Retun
                shipping charges will be paid or reimbursed by us.
            </p>
            <h3>REFUNDS</h3>
            <p>
                After receiving your return and inspecting the condition of your item, we will process your return.
                Please allow at least five (5) days from the receipt of your item to process your
                return. Refunds may take 1-2 billing cycles to appear on your credit card statement, depending on your
                credit card company. We will notify you by email when your return has been
                processed.
            </p>
            <h3>EXCEPTIONS</h3>
            <p>
                The following items cannot be returned:
            </p>
            <ul>
                <li>Gift cards</li>
                <li>Special Offers</li>
                <li>Freebies</li>
            </ul>
            <p>
                For defective or damaged products, please contact us at the contact details below to arrange a refund or
                exchange
                <br/> <strong>Please Note</strong> <br/>
                Sale items are FINAL SALE and cannot be returned.
            </p>
            <h3>QUESTIONS</h3>
            <p>
                If you have any questions concerning our return policy, please contact us at: <br/>
                Tel.: {shop.shopPhone} <br/>
                E-Mail: {shop.shopSupportEmail}
            </p>
        </div>
    )
}

export default RefundsContent;