import React, { useState } from 'react';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();
        const body = {
            username: username,
            password: password,
            email: email,
            firstname: firstname,
            lastname: lastname
        };
        fetch("http://localhost:8089/user/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 409) {
                        window.alert("Email is used");
                    }else {
                        window.alert("Error creating user!");
                    }
                }
                return response.json();
            })
            .then((data) => {
                console.log("User created successfully", data);
                window.location.href = '/register-successfull';
            })
            .catch((error) => {
                console.log("Error creating user:", error);
            });
    };



    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br />
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Register" />
        </form>
    );
}

export default RegisterForm;
