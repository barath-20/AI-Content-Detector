import React, { useState } from "react";
import TypingMonitor from "./TypingMonitor";
import { checkAIContent } from "../api"; // Import the AI content check API
import WebcamProctor from "./WebcamProctor";
import "./test.css";
const Test = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4:"",
    question5:"",
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine all answers into a single text string
    const userAnswers = Object.values(answers).join(" ");

    try {
      const response = await checkAIContent(userAnswers);

      // Show alert box based on AI detection result
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
      
      <WebcamProctor />
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">

      <p className="mb-2">1. What is an OS?</p>
      <input
        type="text"
        name="question1"
        className="input input-primary"
        value={answers.question1}
        onChange={handleChange}
      />
      <TypingMonitor text={answers.question1} /><br></br>

      <p className="mb-2">2. What is virtualization?</p>
      <input
      type="text"
  name="question2"
  placeholder="Primary"
  className="input input-primary"
  value={answers.question2}
  onChange={handleChange}
></input>

      <TypingMonitor text={answers.question2} /><br></br>
      <p className="mb-2">3. What is Virtual Manger?</p>
      <input
        type="text"
        name="question3"
        className="input input-primary"
        value={answers.question3}
        onChange={handleChange}
      />
      <TypingMonitor text={answers.question3} /><br></br>
      <p className="mb-2">4. What are the uses of OS?</p>
      <input
        type="text"
        name="question4"
        className="input input-primary"
        value={answers.question4}
        onChange={handleChange}
      />
      <TypingMonitor text={answers.question4} /><br></br>
      <p className="mb-2">5. What is Process?</p>
      <input
        type="text"
        name="question5"
        className="input input-primary"
        value={answers.question5}
        onChange={handleChange}
      />
      <TypingMonitor text={answers.question5} /><br></br>

      <center><button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button></center>
    </form>
    </div>
  );
};

export default Test;