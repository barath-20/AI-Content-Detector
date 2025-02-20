import React from "react";
import WebcamProctor from "./components/WebcamProctor";
import TypingMonitor from "./components/TypingMonitor";
import AIContentChecker from "./components/AIContentChecker";
import Dashboard from "./components/Dashboard";
/**
 * The main App component.
 *
 * This component renders a basic React application with Vite and React logos,
 * a counter button, and a paragraph of text.
 *
 * The counter button increments the `count` state variable when clicked, and
 * displays the current count.
 *
 * The component also includes a link to the Vite and React documentation.
 *
 * @returns {ReactElement} The App component.
 */
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

