import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./webcam.css";

const WebcamProctor = ({ setVideoBlob }) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [chunks, setChunks] = useState([]);

  const startRecording = () => {
    setChunks([]);
    const stream = webcamRef.current.stream;
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const videoURL = URL.createObjectURL(blob);
      setVideoBlob(videoURL);
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="p-4 border border-gray-500 rounded-lg bg-gray-800 text-white shadow-lg webcam-container">
      <h2 className="text-xl font-semibold mb-2">Proctoring</h2>
      <Webcam ref={webcamRef} width={256} height={192} className="w-64 h-48 rounded-md" />

      <div className="mt-2">
        {!recording ? (
          <button onClick={startRecording} className="px-4 py-2 bg-green-500 text-white rounded mr-2">
            Start Recording
          </button>
        ) : (
          <button onClick={stopRecording} className="px-4 py-2 bg-red-500 text-white rounded">
            Stop Recording
          </button>
        )}
      </div>
    </div>
  );
};

export default WebcamProctor;
