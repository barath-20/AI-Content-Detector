import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase"; // ✅ Import auth
import { auth } from "./firebase"; 
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use this for navigation
    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            toast.success("User logged in successfully", { position: "top-center" });
            navigate("/profile"); 
        } catch(error) {
            console.log(error.message);
            toast.error(error.message, { position: "bottom-center" });
        }
    };

    return (
        <div>
            <form className="container">
                <label>Email</label>
                <div className="input input-secondary">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br />

                <label>Password</label>
                <div className="input input-secondary">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />

                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <h3>Don't have an account? 
                        <li ><Link to="/sigin" ><h2 >Register here</h2></Link></li> 
                    </h3>
                    <button className="btn btn-outline btn-success" onClick={handleSubmit}>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
