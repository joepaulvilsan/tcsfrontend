// src/pages/FinalReportPage.jsx
import React, { useEffect } from "react";
import { useAnalysis } from "../context/AnalysisContext";
import AudioPlayer from "../components/AudioPlayer";
import Navbar from "../layout/Navbar";

const FinalReportPage = () => {
  const { audioFile, finalReportData, setFinalReportData } = useAnalysis();

  useEffect(() => {
    if (audioFile && !finalReportData) {
      const formData = new FormData();
      formData.append("audio", audioFile);
      fetch("http://localhost:8000/final-report", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => setFinalReportData(data))
        .catch((error) => console.error("Error generating final report:", error));
    }
  }, [audioFile, finalReportData, setFinalReportData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-4">Final Report</h1>
        {audioFile ? <AudioPlayer file={audioFile} /> : <p className="text-center text-gray-600">Please upload an audio file.</p>}
        {finalReportData ? (
          <div>{/* Render final report results here */}</div>
        ) : (
          <p className="text-center text-gray-600">No final report data available.</p>
        )}
      </div>
    </div>
  );
};

export default FinalReportPage;