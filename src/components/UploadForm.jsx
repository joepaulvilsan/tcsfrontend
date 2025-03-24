// src/components/UploadForm.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadForm = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateFile(e.target.files[0]);
    }
  };

  // Check if file is an audio type
  const validateFile = (file) => {
    const allowedTypes = ["audio/mpeg", "audio/wav", "audio/x-wav", "audio/mp3", "audio/x-m4a", "audio/m4a"];
    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("Please select a valid audio file (MP3, WAV, M4A).");
      setSelectedFile(null);
      return;
    }
    setErrorMessage("");
    setSelectedFile(file);
  };

  // Mock upload logic
  const handleFileUpload = () => {
    if (!selectedFile) return;
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        // Navigate to Speech Emotion Analysis page and pass the file
        navigate("/analysis", { state: { file: selectedFile } });
      }
    }, 200);
  };

  return (
    <div className="w-full">
      {/* Drag-and-Drop Box */}
      <div
        className={`border-2 border-dashed rounded-md p-8 flex flex-col items-center justify-center transition-colors 
          ${isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300"}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <h3 className="text-lg font-medium mb-2">Upload your audio file</h3>
        <p className="text-gray-500 mb-4 text-sm">
          Drag and drop your audio file here, or click to browse your files
        </p>
        <label
          htmlFor="audio-upload"
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-medium"
        >
          Browse Files
        </label>
        <input
          id="audio-upload"
          type="file"
          accept="audio/mp3,audio/wav,audio/m4a"
          onChange={handleFileChange}
          className="hidden"
        />

        {selectedFile && (
          <p className="mt-4 text-sm text-gray-600">
            Selected File: {selectedFile.name}
          </p>
        )}
        {errorMessage && (
          <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>

      {/* Supported Formats */}
      <p className="text-sm text-gray-500 mt-2">
        Supported formats: MP3, WAV, M4A
      </p>

      {/* Upload Button & Progress Bar */}
      <div className="mt-6">
        <button
          onClick={handleFileUpload}
          disabled={!selectedFile}
          className={`${
            selectedFile
              ? "bg-green-600 hover:bg-green-700 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          } text-white py-2 px-4 rounded text-sm font-medium`}
        >
          Upload
        </button>

        {/* Progress Bar */}
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;