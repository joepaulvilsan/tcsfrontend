// src/context/AnalysisContext.jsx
import React, { createContext, useState, useContext } from "react";

const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [emotionData, setEmotionData] = useState(null);
  const [diarizationData, setDiarizationData] = useState(null);
  const [sentimentData, setSentimentData] = useState(null);
  const [finalReportData, setFinalReportData] = useState(null);

  return (
    <AnalysisContext.Provider
      value={{
        audioFile,
        setAudioFile,
        emotionData,
        setEmotionData,
        diarizationData,
        setDiarizationData,
        sentimentData,
        setSentimentData,
        finalReportData,
        setFinalReportData,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};

export const useAnalysis = () => useContext(AnalysisContext);