import React from 'react';
import {useState} from "react";
function Signin() {
    const [username, setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
         setUsername(e.target.value);
         console.log(username);
    }
    const handleUseremailChange=(e)=>{
        setEmail(e.target.value);
        console.log(email);
    }
   const handleUserpasswordChange=(e)=>{
    setPassword(e.target.value);
    console.log(password);
   }
   const handleUserconfirmPassword=(e)=>{
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
   }
   return(
    <div>
        <label>
            Name
        </label>
        <input type="text" value={username} onChange={handleUsernameChange}/><br></br>
        <label>
            Email
        </label>
        <input type="email" value={email} onChange={handleUseremailChange}/><br></br>
        <label>Password</label>
        <input type="password" value={password} onChange={handleUserpasswordChange}/><br></br>
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword}  onChange={handleUserconfirmPassword}/><br></br>
    </div> 
   )

} export default Signin;