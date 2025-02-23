import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";
import "./Profile.css";

function Profile() {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user);
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserDetails({
                        ...docSnap.data(),
                        photo: user.photoURL, // ✅ Fetch Google avatar
                    });
                    console.log(docSnap.data());
                } else {
                    console.log("User is not logged in");
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="container">
            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src={userDetails?.photo || "https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"} alt="User Avatar" />
                </div>
            </div>
            {userDetails ? (
                <>
                    <center>
                        <h3>Welcome {userDetails.name}</h3>
                    </center>

                    <div>
                        <p>Name: {userDetails.name}</p>
                        <p>Email: {userDetails.email}</p>
                    </div>
                    <div>
                        <p>You can now open your AI proctored test by clicking the button <button className="btn btn-success"><li><Link to="/test">Test</Link></li></button></p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
