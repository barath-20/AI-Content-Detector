import React from "react";
import WebcamProctor from "./components/WebcamProctor";
import TypingMonitor from "./components/TypingMonitor";
import AIContentChecker from "./components/AIContentChecker";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">AI Cheating Detection</h1>
      <WebcamProctor />
      <TypingMonitor />
      <AIContentChecker />
      <Dashboard />
    </div>
  );
};

export default App;
