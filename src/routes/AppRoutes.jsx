import React from "react";
import { Routes, Route } from "react-router-dom";
import UploadPage from "../pages/UploadPage";
import SpeechEmotionPage from "../pages/SpeechEmotionPage";
import SentimentAnalysisPage from "../pages/SentimentAnalysisPage";
import FinalReportPage from "../pages/FinalReportPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UploadPage  />} />
      <Route path="/analysis" element={<SpeechEmotionPage  />} />
      <Route path="/sentiment-analysis" element={<SentimentAnalysisPage />} />
      <Route path="/final-report" element={<FinalReportPage />} />
    </Routes>
  );
};

export default AppRoutes;