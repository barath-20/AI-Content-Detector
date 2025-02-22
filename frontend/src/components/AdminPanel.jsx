import React from "react";

const AdminPanel = ({ videoBlob }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      {videoBlob ? (
        <div>
          <h3 className="text-lg mb-2">Recorded Video:</h3>
          <video src={videoBlob} controls className="mt-4 w-64 h-48 rounded-md" />
        </div>
      ) : (
        <p>No video recorded yet.</p>
      )}
    </div>
  );
};

export default AdminPanel;
