// src/pages/SpeechEmotionPage.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import EmotionGraph from "../components/EmotionGraph";
import EmotionPie from "../components/EmotionPie";
import SpeakerDiarizationTable from "../components/SpeakerDiarizationTable";

const SpeechEmotionPage = () => {
  const location = useLocation();
  const file = location.state?.file;
  const [emotionData, setEmotionData] = useState(null);
  const [diarizationData, setDiarizationData] = useState(null);
  const [loadingEmotion, setLoadingEmotion] = useState(false);
  const [loadingDiarization, setLoadingDiarization] = useState(false);

  // Fetch emotion analysis data
  useEffect(() => {
    if (file) {
      setLoadingEmotion(true);
      const formData = new FormData();
      formData.append("audio", file);

      fetch("http://localhost:8000/analyze-emotion", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setEmotionData(data);
          setLoadingEmotion(false);
        })
        .catch((error) => {
          console.error("Error analyzing emotion:", error);
          setLoadingEmotion(false);
        });
    }
  }, [file]);

  // Fetch speaker diarization data
  useEffect(() => {
    if (file) {
      setLoadingDiarization(true);
      const formData = new FormData();
      formData.append("audio", file);

      fetch("http://localhost:8000/speaker-diarization", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setDiarizationData(data.speakers);
          setLoadingDiarization(false);
        })
        .catch((error) => {
          console.error("Error analyzing speakers:", error);
          setLoadingDiarization(false);
        });
    }
  }, [file]);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-4">Speech Emotion Analysis</h1>
      {file ? (
        <AudioPlayer file={file} />
      ) : (
        <p className="text-center text-gray-600">Please upload an audio file on the Upload page.</p>
      )}
      
      {loadingEmotion && <p className="text-center">Analyzing emotions...</p>}
      {emotionData && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Emotion Timeline</h2>
          <EmotionGraph timeline={emotionData.emotion_timeline} />
          <h2 className="text-2xl font-semibold">Emotion Distribution</h2>
          <EmotionPie distribution={emotionData.emotion_distribution} />
        </div>
      )}
      
      {loadingDiarization && <p className="text-center">Analyzing speaker diarization...</p>}
      {diarizationData && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Speaker Diarization</h2>
          <SpeakerDiarizationTable diarizationData={diarizationData} />
        </div>
      )}
    </div>
  );
};

export default SpeechEmotionPage;