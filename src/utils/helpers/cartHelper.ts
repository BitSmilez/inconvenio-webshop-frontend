const addToCart = async (productID: string, quantity: number, changeCartItemCount: any, alert: any) => {
    return fetch("http://localhost:8080/add-to-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            productID: productID,
            quantity: quantity,
        }),
    })
        .then((res) => {
            if (res.status === 200) {
                changeCartItemCount(quantity);
                alert.show("Added to cart.");
            } else {
                alert.show("Something went wrong.");
            }
        });
}

const removeFromCart = async (productID: string, cartID: string, alert: any) => {
    fetch("http://localhost:8080/remove-from-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            productID: productID,
            cartID: cartID,
        }),
    })
        .then((res) => {
            if (res.status === 200) {
                window.location.reload();
            } else {
                alert.show("Something went wrong :/")
            }
        });
}

const updateCart = async (productID: string, quantity: number, cartID: string, alert: any) => {
    fetch("http://localhost:8080/update-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
            } else {
                alert.show("Something went wrong :/")
            }
        });
}


export {addToCart, removeFromCart, updateCart};