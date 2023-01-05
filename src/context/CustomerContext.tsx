import React, {createContext, useState} from "react";

export const CustomerContext = createContext({});

type CustomerContextProviderProps = {
    children: React.ReactNode;
}


const CustomerContextProvider = ({children}: CustomerContextProviderProps) => {
    const [customerData, setCustomerData] = useState({
        wishlistItemCount: 0,
        cartItemCount: 0,
        isLoggedIn: false,
        customer: null,
    });

    const changeWishlistItemCount = (count: number) => {
        setCustomerData({...customerData, wishlistItemCount: customerData.wishlistItemCount + count})
    }

    const changeCartItemCount = (count: number) => {
        setCustomerData({...customerData, cartItemCount: customerData.cartItemCount + count})
    }
    const setCartItemCount = (count: number) => {
        setCustomerData({...customerData, cartItemCount: count})
    }


    return (
        <CustomerContext.Provider value={{
            customerData,
            changeWishlistItemCount,
            changeCartItemCount,
            setCartItemCount
        }}>
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerContextProvider;



