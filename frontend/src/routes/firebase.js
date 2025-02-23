
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCfOFUgYCDcN_Wj-4N6mMmf8HYK9Y8f73M",
  authDomain: "ai-detection-system.firebaseapp.com",
  projectId: "ai-detection-system",
  storageBucket: "ai-detection-system.firebasestorage.app",
  messagingSenderId: "107440366782",
  appId: "1:107440366782:web:2de2af3c90df947e266aef",
  measurementId: "G-B9FC7MLMGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db=getFirestore(app);
export default app;