const createOrder = async (orderSummary: any, alert: any) => {
    fetch("http://localhost:8081/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderSummary
        }),
    })
        .then((res) => {
            if (res.status === 200) {
                window.location.href = "/order-confirmation";
            } else if (res.status === 403) {
                alert.show("You are not logged in.", {type: "info", timeout: 2000});
            } else {
                alert.show("Something went wrong :/");
            }
        });

}

export { createOrder };