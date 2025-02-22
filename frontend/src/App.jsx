import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import AdminPanel from "./components/AdminPanel";
import "./App.css"; // Optional for global styles

const App = () => {
  const [videoBlob, setVideoBlob] = useState(null); // State to store recorded video

  return (
    <Router>
      <div className="p-6">
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-500">Home</Link>
          <Link to="/admin" className="text-red-500">Admin Panel</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Test setVideoBlob={setVideoBlob} />} />
          <Route path="/admin" element={<AdminPanel videoBlob={videoBlob} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
