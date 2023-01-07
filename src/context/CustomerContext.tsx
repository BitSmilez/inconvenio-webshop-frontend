import React, {createContext, useEffect, useState} from "react";
import {useFetch} from "../hooks/useFetch";

export const CustomerContext = createContext({});

type CustomerContextProviderProps = {
    children: React.ReactNode;
}


const CustomerContextProvider = ({children}: CustomerContextProviderProps) => {
    // TOOD: Use customer id for fetching as soon as we have a login
    const {fetchedData: cartCount, isLoading}: any = useFetch("http://localhost:8081/cart/1234")
    const [customerData, setCustomerData] = useState({
        wishlistItemCount: 0,
        cartItemCount: 0,
        isLoggedIn: false,
        customer: null,
    });

    useEffect(() => {
        if(!isLoading) {
            // iterate over cart items and sum up quantity
            let cartItemCount = 0;
            cartCount.items.forEach((item: any) => {
                cartItemCount += item.quantity;
            })
            setCustomerData({...customerData, cartItemCount: cartItemCount})
        }
    }, [isLoading, customerData, cartCount.items])

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



