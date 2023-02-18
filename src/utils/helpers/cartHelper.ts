const addToCart = async (productID: string, quantity: number, cartID: string, changeCartItemCount: any, alert: any) => {
    fetch("http://localhost:8089/user/add-to-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...generateHeaders(),
        },
        body: JSON.stringify({
            productID: productID,
            quantity: quantity,
            cartID: cartID ,
        }),
    })
        .then((res) => {
            if (res.status === 200) {
                changeCartItemCount(quantity);
                alert.show("Added to cart.");
            } else if (res.status === 403) {
                alert.show("You are not logged in.", {type: "info", timeout: 2000});
            } else {
                alert.show("Something went wrong.", {type: "error", timeout: 2000});
            }
        });
}

const removeFromCart = async (productID: string, cartID: string, alert: any) => {
    fetch("http://localhost:8089/user/remove-from-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...generateHeaders()
        },
        body: JSON.stringify({
            productID: productID,
            cartID: cartID,
        }),
    })
        .then((res) => {
            if (res.status === 200) {
                window.location.reload();
            } else if (res.status === 403) {
                alert.show("You are not logged in.", {type: "info", timeout: 2000});
            } else {
                alert.show("Something went wrong :/")
            }
        });
}

const updateCart = async (productID: string, quantity: number, cartID: string, alert: any) => {
    fetch("http://localhost:8089/user/update-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...generateHeaders()
        },
        body: JSON.stringify({
            productID: productID,
            quantity: quantity,
            cartID: cartID,
        }),
    })
        .then((res) => {
            if (res.status === 200) {
                window.location.reload();

            } else if (res.status === 403) {
                alert.show("You are not logged in.", {type: "info", timeout: 2000});
            } else {
                alert.show("Something went wrong :/")
            }
        });
}

const getCartItemCount = async (userID: string, setCount: any) => {
    fetch("http://localhost:8081/cart/" + userID,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        }).then((data) => {
        if (data !== undefined) {
            setCount(data.quantity);
        }
    });
}

const generateHeaders = () => {
    const bearer = localStorage.getItem("accessToken") || "";
    const headers: any = {};
    if (bearer) {
        headers["Authorization"] = "Bearer " + bearer;
    }
    return headers;
}


export {addToCart, removeFromCart, updateCart, getCartItemCount};