import React from "react";
import Test from "./components/Test";
import AIContentChecker from "./components/AIContentChecker";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Test AIContentCheckerComponent={AIContentChecker} />
    </div>
  );
};

export default App;
