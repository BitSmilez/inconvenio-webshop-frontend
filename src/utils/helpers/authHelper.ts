const register = async (body: any, alert: any, setLoggedIn: any) => {

    fetch("http://localhost:8089/user/create", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
        .then((response) => {
            if (!response.ok) {
                if (response.status === 409) {
                    alert.show("Email is already in use!", {type: "info", timeout: 2000});
                } else {
                    alert.show("Error creating user!", {type: "error", timeout: 2000});
                }
            } else {
                alert.show("Registration sucessful!");
                setLoggedIn(true);
                return response;
            }
        })
        .then((response) => {
            if (response) {
                window.location.href = '/register/success';
            }
        })
}


export {register}