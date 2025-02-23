import React from "react";
import Test from "./components/Test";
import AIContentChecker from "./components/AIContentChecker";
import "./App.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signin from "./routes/sigin";
import About from "./routes/About";
import Navbar from "./routes/Navbar";
import Profile from "./routes/Profile";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div style={{ backgroundColor: "#020035", minHeight: "100vh", color: "white", padding: "20px" }}>
    
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sigin" element={<Signin />} />
      <Route path="/test" element={<Test />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
      </BrowserRouter>
      {/* <Test AIContentCheckerComponent={AIContentChecker} /> */}
    </div>
  );
};

export default App;
