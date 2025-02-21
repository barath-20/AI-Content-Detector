import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamProctor = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    // Send image to backend for face analysis
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Proctoring</h2>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureImage} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Capture Image
      </button>
      {capturedImage && <img src={capturedImage} alt="Captured" className="mt-2" />}
    </div>
  );
};

export default WebcamProctor;
