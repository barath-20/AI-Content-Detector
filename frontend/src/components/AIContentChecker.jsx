import React, { useState } from "react";
import { checkAIContent } from "../api";

const AIContentChecker = ({ text }) => {
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const response = await checkAIContent(text);
    setResult(response);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">AI Content Checker</h2>
      <textarea
        className="w-full p-2 border rounded"
        rows="4"
        readOnly
        value={text}
      />
      <button onClick={handleCheck} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Check AI Content
      </button>
      {result && <p className="mt-2 text-sm">{result.message}</p>}
    </div>
  );
};

export default AIContentChecker;
    