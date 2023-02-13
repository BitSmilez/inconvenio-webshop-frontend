const register = async (body: any, alert: any) => {

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
                return response;
            }
        })
        .then((response) => {
            if (response) {
                window.location.href = '/register-successful';
            }
        })
}

const login = async (body: any, alert: any, setLoggedIn: any, setToken: any) => {

    fetch("http://localhost:8089/user/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
        .then((response) => {
                if (!response.ok) {
                    if (response.status === 403) {
                        alert.show("Invalid credentials!", {type: "info", timeout: 2000});
                    } else {
                        alert.show("Error logging in!", {type: "error", timeout: 2000});
                    }
                } else {
                    return response;
                }
            }
        )
        .then((response) => {
            if (response) {
                response.json().then((data) => {
                        setToken(data.access_token);
                        setLoggedIn(true);
                        window.location.href = '/';
                    }
                )
            }
        })
}


export {register, login};