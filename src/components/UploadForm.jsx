// src/components/UploadForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalysis } from "../context/AnalysisContext";

const UploadForm = () => {
  const navigate = useNavigate();
  const { setAudioFile, setEmotionData, setDiarizationData, setSentimentData, setFinalReportData } = useAnalysis();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      // Set the audio file in global context and clear previous analysis data.
      setAudioFile(file);
      setEmotionData(null);
      setDiarizationData(null);
      setSentimentData(null);
      setFinalReportData(null);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        // After upload, navigate to the Speech Emotion page.
        navigate("/analysis");
      }
    }, 200);
  };

  return (
    <div className="w-full">
      <div
        className="border-2 border-dashed rounded-md p-8 flex flex-col items-center justify-center transition-colors border-gray-300"
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
          accept="audio/*"
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
      <p className="text-sm text-gray-500 mt-2">Supported formats: MP3, WAV, M4A</p>
      <div className="mt-6">
        <button
          onClick={handleUpload}
          disabled={!selectedFile}
          className={`${
            selectedFile
              ? "bg-green-600 hover:bg-green-700 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          } text-white py-2 px-4 rounded text-sm font-medium`}
        >
          Upload
        </button>
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