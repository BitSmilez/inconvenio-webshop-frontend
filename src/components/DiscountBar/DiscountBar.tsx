import "./DiscountBar.css"
import {useState} from "react";
import {useAlert} from 'react-alert'

const DiscountBar = () => {

    const alert = useAlert();

    const [currentDiscountCode, setCurrentDiscountCode] = useState<string>("")

    const handleDiscountCodeChange = (event: any) => {
        setCurrentDiscountCode(event.target.value)
    }

    const handleDiscountCodeSubmit = (event: any) => {
        event.preventDefault()
        alert.show(`Discount code ${currentDiscountCode} submitted (Not)`)
    }

    return (
        <div className={"discount-bar"}>
            <input className={"discount-bar-input"}
                   placeholder={"Enter Discount code"}
                   onChange={e => handleDiscountCodeChange(e)}/>
            <button onClick={e => handleDiscountCodeSubmit(e)} className={"discount-bar-button"}> Apply</button>
        </div>
    )

}

export default DiscountBar;