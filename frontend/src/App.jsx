import React from "react";
import Test from "./components/Test";
import AIContentChecker from "./components/AIContentChecker";
import "./App.css";

const App = () => {
  return (
    <div>
      <Test AIContentCheckerComponent={AIContentChecker} />
    </div>
  );
};

export default App;
