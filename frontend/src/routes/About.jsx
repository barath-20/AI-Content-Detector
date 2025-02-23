import React from "react"; 

const About = () => {
  return (
    <div style={{ backgroundColor: "#020035", minHeight: "100vh" }} className="flex items-center justify-center p-6">
      <div className="max-w-4xl bg-gray-800 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          About Our App
        </h1>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* AI Content Detection */}
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">AI Content Detection</h2>
            <p className="text-gray-300">
              Our app detects AI-generated content inside the test monitor page. 
              Users submit their answers, and the backend checks if AI-generated text is used. 
              If detected, the system flags the user with a warning.
            </p>
          </div>

          {/* Real-time Monitoring */}
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Real-time Monitoring</h2>
            <p className="text-gray-300">
              We have an integrated webcam that monitors users during the test. 
              It detects any suspicious activities or malpractices to ensure a fair exam environment.
            </p>
          </div>

          {/* Secure Backend Integration */}
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-400 mb-2">Secure Backend Integration</h2>
            <p className="text-gray-300">
              Our system processes user input efficiently with secure backend validation, 
              ensuring that AI-detected content is flagged accurately and fairly.
            </p>
          </div>

          {/* User-friendly Interface */}
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-400 mb-2">User-Friendly Interface</h2>
            <p className="text-gray-300">
              Designed with simplicity in mind, our platform offers a seamless experience for students and educators.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
