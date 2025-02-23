import React, { useState } from 'react';
import "./login.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase'; // ✅ Import db
import { setDoc, doc } from 'firebase/firestore';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
function Signin() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 
    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; // ✅ Get user correctly

            // ✅ Store user data in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: username,  // ✅ Use state username
                email: user.email,
            });

           
            navigate("/login");

        } catch (error) {
            console.error("Error:", error.message);
            toast.error(error.message,{position: "bottom-center" });
        }
    };

    return (
        <div>
            <div className="container" style={{ height: "500px" }}>
                <label>Name</label>
                <div className="input input-secondary">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div><br />

                <label>Email</label>
                <div className="input input-secondary">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div><br />

                <label>Password</label>
                <div className="input input-secondary">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div><br />

                <label>Confirm Password</label>
                <div className="input input-secondary">
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div><br />

                <center>
                    <button onClick={handleRegister} className="btn btn-success">Submit</button>
                </center>
            </div>
        </div>
    );
}

export default Signin;