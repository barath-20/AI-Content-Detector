import React from "react";
import Test from "./components/Test";
import AIContentChecker from "./components/AIContentChecker";
import "./App.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signin from "./routes/sigin";
import About from "./routes/About";
import Navbar from "./routes/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Test/>
      {/* <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sigin" element={<Signin />} />
      </Routes>
      </BrowserRouter> */}
      {/* <Test AIContentCheckerComponent={AIContentChecker} /> */}
    </div>
  );
};

export default App;
