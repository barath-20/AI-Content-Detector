import React, { useState } from "react";
import TypingMonitor from "./TypingMonitor";
import { checkAIContent } from "../api"; // API to check for AI content
import WebcamProctor from "./WebcamProctor";
import "./test.css";

const Test = ({ setVideoBlob }) => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userAnswers = Object.values(answers).join(" ");

    try {
      const response = await checkAIContent(userAnswers);
      if (response.isAI) {
        alert("⚠ AI-generated content detected! Please provide original answers.");
      } else {
        alert("✅ Submission successful! No AI-generated content detected.");
      }
    } catch (error) {
      console.error("Error checking AI content:", error);
      alert("❌ Error checking AI content. Please try again.");
    }
  };

  return (
    <div>
      <center><h2 className="text-2xl font-bold mb-4">Welcome to the Test Portal</h2></center>
      
      <WebcamProctor setVideoBlob={setVideoBlob} />
      <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
        {["What is an OS?", "What is virtualization?", "What is Virtual Manager?", "What are the uses of OS?", "What is Process?"].map((question, index) => (
          <div key={index}>
            <p className="mb-2">{index + 1}. {question}</p>
            <input
              type="text"
              name={`question${index + 1}`}
              className="input input-primary"
              value={answers[`question${index + 1}`]}
              onChange={handleChange}
            />
            <TypingMonitor text={answers[`question${index + 1}`]} /><br />
          </div>
        ))}

        <center>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default Test;
