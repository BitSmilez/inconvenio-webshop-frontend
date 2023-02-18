import React, {createContext, useEffect, useState} from "react";
import jwt from 'jwt-decode';
import {getCartItemCount} from "../utils/helpers/cartHelper";


export const CustomerContext = createContext({});

type CustomerContextProviderProps = {
    children: React.ReactNode;
}

const CustomerContextProvider = ({children}: CustomerContextProviderProps) => {
    const [customer, setCustomer] = useState({
        wishlistItemCount: 0,
        cartItemCount: 0,
        isLoggedIn: localStorage.getItem("isLoggedIn") || "false",
        customerID: localStorage.getItem("customerID") || ""
    });

    const changeWishlistItemCount = (count: number) => {
        setCustomer({...customer, wishlistItemCount: customer.wishlistItemCount + count})
    }


    const setCartItemCount = (count: number) => {
        setCustomer({...customer, cartItemCount: count})
    }

    const setLoggedIn = (isLoggedIn: boolean) => {
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());
    }

    const setToken = (token: string) => {
        localStorage.setItem("accessToken", token);
        const decodedToken: any = jwt(token);
        updateUserID(decodedToken.sub);
    }

    const updateUserID = (id: string) => {
        localStorage.setItem("customerID", id);
    }

    const getCustomerInfo = () => {
        const token: any = jwt(localStorage.getItem("accessToken") || "");
        return {
            firstname: token.given_name,
            lastname: token.family_name,
            email: token.email,
            verified: token.email_verified,
        };
    }

    useEffect(() => {
        const updateCartCount = async () => {
            if (customer.isLoggedIn === "true" && customer.customerID !== "") {
                await getCartItemCount(customer.customerID, setCustomer);
            }
        }
        void updateCartCount()
    }, [customer.cartItemCount, customer.isLoggedIn, customer.customerID])


    return (
        <CustomerContext.Provider value={{
            customer,
            setCustomer,
            changeWishlistItemCount,
            setCartItemCount,
            setLoggedIn,
            setToken,
            getCustomerInfo
        }}>
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerContextProvider;



