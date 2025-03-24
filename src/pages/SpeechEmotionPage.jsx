// src/pages/SpeechEmotionPage.jsx
import React, { useEffect } from "react";
import { useAnalysis } from "../context/AnalysisContext";
import AudioPlayer from "../components/AudioPlayer";
import EmotionGraph from "../components/EmotionGraph";
import EmotionPie from "../components/EmotionPie";
import SpeakerDiarizationTable from "../components/SpeakerDiarizationTable";
import Navbar from "../layout/Navbar";

const SpeechEmotionPage = () => {
  const {
    audioFile,
    emotionData,
    setEmotionData,
    diarizationData,
    setDiarizationData,
  } = useAnalysis();

  useEffect(() => {
    if (audioFile && !emotionData) {
      const formData = new FormData();
      formData.append("audio", audioFile);
      fetch("http://localhost:8000/analyze-emotion", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => setEmotionData(data))
        .catch((error) => console.error("Error analyzing emotion:", error));
    }
  }, [audioFile, emotionData, setEmotionData]);

  useEffect(() => {
    if (audioFile && !diarizationData) {
      const formData = new FormData();
      formData.append("audio", audioFile);
      fetch("http://localhost:8000/speaker-diarization", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => setDiarizationData(data.speakers))
        .catch((error) => console.error("Error analyzing speakers:", error));
    }
  }, [audioFile, diarizationData, setDiarizationData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-4">Speech Emotion Analysis</h1>
        {audioFile ? (
          <AudioPlayer file={audioFile} />
        ) : (
          <p className="text-center text-gray-600">Please upload an audio file on the Upload page.</p>
        )}

        {emotionData && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Emotion Timeline</h2>
            <EmotionGraph timeline={emotionData.emotion_timeline} />
            <h2 className="text-2xl font-semibold">Emotion Distribution</h2>
            <EmotionPie distribution={emotionData.emotion_distribution} />
          </div>
        )}

        {diarizationData && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Speaker Diarization</h2>
            <SpeakerDiarizationTable diarizationData={diarizationData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeechEmotionPage;