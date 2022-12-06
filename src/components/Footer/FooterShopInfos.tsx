import "./Footer.css"
import {Business, Call, Email} from "@mui/icons-material";


const FooterShopInfos = ({shopName, address, email, phone}: {shopName: string, address: string, email: string, phone:string}) => {

    return(
        <><
            h2 className={"footer-shop-headline"}>{shopName}</h2>
            <div className={"footer-shop-infos"}>
                <div className={"footer-contact-entry"}>
                    <p><Business sx={{mb: -0.5, mr: 1}}/> {address}</p>
                </div>
                <div className={"footer-contact-entry"}>
                    <p><Email sx={{mb: -0.5, mt: -2, mr: 1}}/> {email}</p>
                </div>
                <div className={"footer-contact-entry"}>
                    <p><Call sx={{mb: -0.5, mr: 1}}/> {phone}</p>
                </div>
            </div>
        </>
    )
}

export default FooterShopInfos;