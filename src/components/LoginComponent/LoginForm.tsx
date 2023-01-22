import React, { useState } from 'react';
import "./LoginForm.css";
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();
        // Add code here to send login information to server for validation
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
            <input type="submit" value="Login" />
            <button onClick={() => window.location.href = '/register'}>
                Register
            </button>
        </form>
    );
}

export default LoginForm;