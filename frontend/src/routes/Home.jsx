import React from "react";
import "./Home.css"; // Importing the CSS file

const Home = () => {
  return (
    <div style={{ backgroundColor: "#020035", minHeight: "100vh" }} className="text-white flex flex-col items-center justify-center p-6">
      
      {/* Robot Eyes Animation */}
      <div className="robot-eyes-container">
        <div className="robot-eye">
          <h2 className="eye-text">I am watching!</h2>
        </div>
        <div className="robot-eye">
          <h2 className="eye-text">You cannot use AI here</h2>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-4xl bg-gray-800 shadow-lg rounded-2xl p-8 text-center mt-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Welcome to Our AI Detection Platform</h1>
        <p className="text-gray-300 leading-relaxed">
          Our platform is designed to **detect AI-generated content** in exams and monitor user behavior. 
          Using advanced **backend validation**, our system flags AI-generated answers and ensures a **cheating-free** environment.
        </p>
        
        <div className="my-6 p-4 bg-gray-700 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">How It Works?</h2>
          <ul className="text-gray-300 list-disc list-inside">
            <li>Users submit answers in the test monitor.</li>
            <li>The backend **analyzes** and detects AI-generated content.</li>
            <li>If AI content is found, the system **flags** the response.</li>
            <li>Our **webcam monitoring** ensures users do not indulge in malpractice.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* AI Content Detection */}
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">AI Content Detection</h2>
            <p className="text-gray-300">
              Every answer submitted is scanned to ensure it is **human-written**, preventing the use of AI-generated responses.
            </p>
          </div>

          {/* Real-time Monitoring */}
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Webcam Monitoring</h2>
            <p className="text-gray-300">
              Our AI-powered webcam detection keeps a **watchful eye** on users to prevent any suspicious activity during tests.
            </p>
          </div>

          {/* Secure Backend Integration */}
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-400 mb-2">Secure Backend</h2>
            <p className="text-gray-300">
              We ensure **secure and efficient** validation, making sure AI-generated content is accurately flagged.
            </p>
          </div>

          {/* User-friendly Interface */}
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-400 mb-2">Easy-to-Use Platform</h2>
            <p className="text-gray-300">
              Designed for **students & educators**, our interface is simple, intuitive, and efficient.
            </p>
          </div>

        </div>
      </div>

      {/* Developer Profiles Section */}
      <h2 className="text-3xl font-bold text-white mt-10">Meet the Developers</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-40 h-40 flex items-center justify-center">
          <p className="text-gray-300 text-center">Dev 1</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-40 h-40 flex items-center justify-center">
          <p className="text-gray-300 text-center">Dev 2</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-40 h-40 flex items-center justify-center">
          <p className="text-gray-300 text-center">Dev 3</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-40 h-40 flex items-center justify-center">
          <p className="text-gray-300 text-center">Dev 4</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
