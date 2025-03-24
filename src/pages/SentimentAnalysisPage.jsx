// src/pages/SentimentAnalysisPage.jsx
import React, { useEffect } from "react";
import { useAnalysis } from "../context/AnalysisContext";
import AudioPlayer from "../components/AudioPlayer";
import Navbar from "../layout/Navbar";

const SentimentAnalysisPage = () => {
  const { audioFile, sentimentData, setSentimentData } = useAnalysis();

  useEffect(() => {
    if (audioFile && !sentimentData) {
      const formData = new FormData();
      formData.append("audio", audioFile);
      fetch("http://localhost:8000/sentiment-analysis", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => setSentimentData(data))
        .catch((error) => console.error("Error analyzing sentiment:", error));
    }
  }, [audioFile, sentimentData, setSentimentData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-4">Sentimental Analysis</h1>
        {audioFile ? <AudioPlayer file={audioFile} /> : <p className="text-center text-gray-600">Please upload an audio file.</p>}
        {sentimentData ? (
          <div>{/* Render sentiment analysis results here */}</div>
        ) : (
          <p className="text-center text-gray-600">No sentiment data available.</p>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalysisPage;