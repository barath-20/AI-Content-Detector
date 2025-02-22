import React from "react";
import {useState} from 'react';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setPassword(e.target.value);
    }
    return(
        <div>
            <form>
                <label>Email</label>
                <input type="email" placeholder="Email" value={email} onChange={handleChange} />
                <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={handleChange} />
            </form>
        </div>
    )
} export default Login;