import React, { useState } from "react";
import { sendTypingData } from "../api";

const TypingMonitor = () => {
  const [text, setText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [lastKeyPress, setLastKeyPress] = useState(null);

  const handleTyping = (e) => {
    setText(e.target.value);
    const now = Date.now();

    if (lastKeyPress) {
      const speed = now - lastKeyPress;
      setTypingSpeed(speed);
      sendTypingData({ speed, text: e.target.value });
    }
    setLastKeyPress(now);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Typing Monitor</h2>
      <textarea
        className="w-full p-2 border rounded"
        rows="4"
        onChange={handleTyping}
        value={text}
      />
      <p className="mt-2 text-sm">Typing Speed: {typingSpeed} ms per key</p>
    </div>
  );
};

export default TypingMonitor;

