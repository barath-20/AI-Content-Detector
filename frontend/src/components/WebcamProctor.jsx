import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamProctor = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const [chunks, setChunks] = useState([]);

  const startRecording = () => {
    setChunks([]); // Reset chunks
    const stream = webcamRef.current.stream;
    const mediaRecorder = new MediaRecorder(stream);
    
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setVideoBlob(URL.createObjectURL(blob));
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
    <div className="p-4 border border-gray-500 rounded-lg bg-gray-800 text-white shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Proctoring</h2>

      {/* Webcam with Reduced Size */}
      <Webcam ref={webcamRef} width={256} height={192} className="w-64 h-48 rounded-md" />

      {/* Buttons */}
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

      {/* Video Preview */}
      {videoBlob && (
        <video src={videoBlob} controls className="mt-4 w-64 h-48 rounded-md" />
      )}
    </div>
  );
};

export default WebcamProctor;
