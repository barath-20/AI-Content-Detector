import React, { useEffect, useState } from "react";
import { sendTypingData } from "../api";

const TypingMonitor = ({ text }) => {
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [lastKeyPress, setLastKeyPress] = useState(null);

  useEffect(() => {
    if (!text) return;

    const now = Date.now();
    if (lastKeyPress) {
      const speed = now - lastKeyPress;
      setTypingSpeed(speed);
      sendTypingData({ speed, text });
    }
    setLastKeyPress(now);
  }, [text]); // Runs whenever `text` changes

  return (
    <div className="p-4 border rounded-lg mt-2">
      <h2 className="text-xl font-semibold mb-2">Typing Monitor</h2>
      <p className="mt-2 text-sm">Typing Speed: {typingSpeed} ms per key</p>
    </div>
  );
};

export default TypingMonitor;
