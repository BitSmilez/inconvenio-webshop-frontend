import React, {createContext, useEffect, useState} from "react";
import {useFetch} from "../hooks/useFetch";

export const CustomerContext = createContext({});

type CustomerContextProviderProps = {
    children: React.ReactNode;
}


const CustomerContextProvider = ({children}: CustomerContextProviderProps) => {
    // TOOD: Use customer id for fetching as soon as we have a login
    const [customer, setCustomer] = useState({
        wishlistItemCount: 0,
        cartItemCount: 0,
        isLoggedIn: false,
        customerID: 1,
    });
    const {fetchedData: cartCount, isLoading}: any = useFetch("http://localhost:8081/cart/" + customer.customerID)


    useEffect(() => {
        if(!isLoading) {
            let cartItemCount = 0;
            cartCount.items?.forEach((item: any) => {
                cartItemCount += item.quantity;
            })
            setCustomer(customer => ({...customer, cartItemCount: cartItemCount}));
        }
    }, [cartCount.items, isLoading])

    const changeWishlistItemCount = (count: number) => {
        setCustomer({...customer, wishlistItemCount: customer.wishlistItemCount + count})
    }

    const changeCartItemCount = (count: number) => {
        setCustomer({...customer, cartItemCount: customer.cartItemCount + count})
    }
    const setCartItemCount = (count: number) => {
        setCustomer({...customer, cartItemCount: count})
    }


    return (
        <CustomerContext.Provider value={{
            customer,
            changeWishlistItemCount,
            changeCartItemCount,
            setCartItemCount
        }}>
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerContextProvider;



