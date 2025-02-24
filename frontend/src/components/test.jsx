import React, { useState } from "react";
import TypingMonitor from "./TypingMonitor";
import { checkAIContent } from "../api"; // Import content check API
import WebcamProctor from "./WebcamProctor";
import "./test.css";
const correctAnswers = {
  question1: "An OS (Operating System) is system software that manages computer hardware, software resources, and provides common services for computer programs.",
  question2: "Virtualization is the process of creating a virtual version of something, including virtual computer hardware platforms, storage devices, and computer network resources.",
  question3: "A Virtual Machine Manager (VMM) or hypervisor is a software, firmware, or hardware that creates and runs virtual machines.",
  question4: "The OS manages hardware and software resources, provides a user interface, manages files, handles processes, and ensures security and communication between applications.",
  question5: "A process is an instance of a program in execution. It includes program code, its current activity, and a set of resources allocated to it."
};
const Test = () => {
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
    // Combine all answers into a single text string for AI content detection
    const userAnswers = Object.values(answers).join(" ");
    try {
        // Step 1: AI-generated content detection
        const aiResponse = await fetch("http://127.0.0.1:8000/detection/detect-ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: userAnswers }),
        });
        if (!aiResponse.ok) {
            throw new Error(`AI Detection API Error: ${aiResponse.statusText}`);
        }
        const aiData = await aiResponse.json();
        if (aiData.is_ai_generated) {
            alert("⚠️ AI-generated content detected! Please provide original answers.");
            return;
        }
        // Step 2: Plagiarism detection
        let plagiarismDetected = false;
        for (const [key, correctAnswer] of Object.entries(correctAnswers)) {
            const userAnswer = answers[key];
            if (!userAnswer || !correctAnswer) {
                console.warn(`Skipping question ${key}: Missing answer data.`);
                continue;
            }
            try {
                const plagiarismResponse = await fetch("http://127.0.0.1:8000/behavior/check-plagiarism", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text1: userAnswer, text2: correctAnswer }),
                });
                if (!plagiarismResponse.ok) {
                    throw new Error(`Plagiarism API Error: ${plagiarismResponse.statusText}`);
                }
                const plagiarismData = await plagiarismResponse.json();
                console.log(`\n📝 Question: ${key}`);
                console.log(`👤 User Answer: ${userAnswer}`);
                console.log(`🎓 Correct Answer: ${correctAnswer}`);
                console.log(`🤖 Similarity Score: ${plagiarismData.similarity_score}`);
                console.log(`🚨 Plagiarism Detected: ${plagiarismData.similarity_score > 0.8}\n`);
                if (plagiarismData.similarity_score > 0.8) {
                    plagiarismDetected = true;
                }
            } catch (error) {
                console.error(`Error checking plagiarism for question ${key}:`, error);
            }
        }
        // Final Decision
        if (plagiarismDetected) {
            alert("⚠️ Plagiarism detected! Your answers are too similar to the reference material.");
        } else {
            alert("✅ Submission successful! No AI-generated content or plagiarism detected.");
        }
    } catch (error) {
        console.error("Error during submission:", error);
        alert("❌ Error processing your submission. Please try again.");
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
