import React from "react";
import UploadForm from "../components/UploadForm";

const UploadPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      {/* Small pill or badge at the top */}
      <div className="mt-8">
        <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">
          Speech Emotion Analysis
        </span>
      </div>

      {/* Main content wrapper (scrollable if needed) */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Upload Your Audio File
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Upload an audio file for our AI to analyze. We’ll detect emotions,
          identify speakers, and analyze speech patterns to provide you with
          comprehensive insights.
        </p>

        {/* UploadForm */}
        <div className="mb-8">
          <UploadForm />
        </div>

        {/* Audio Analysis Info */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-12">
          <h2 className="text-gray-800 font-semibold mb-2">
            Audio Analysis Information
          </h2>
          <p className="text-sm text-gray-600">
            Our AI will analyze your audio for emotions, speaker diarization, and
            speech patterns. For best results, use clear recordings with minimal
            background noise.
          </p>
        </div>

        {/* What We'll Analyze */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          What We’ll Analyze
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Card 1: Emotion Recognition */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center flex-1">
            <h3 className="text-lg font-semibold mb-2">Emotion Recognition</h3>
            <p className="text-gray-600 text-sm">
              Detect joy, sadness, anger, fear, surprise, and other nuanced
              emotions throughout the recording.
            </p>
          </div>

          {/* Card 2: Speaker Diarization */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center flex-1">
            <h3 className="text-lg font-semibold mb-2">Speaker Diarization</h3>
            <p className="text-gray-600 text-sm">
              Identify different speakers in the conversation and see when each
              person is talking.
            </p>
          </div>

          {/* Card 3: Speech Analysis */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center flex-1">
            <h3 className="text-lg font-semibold mb-2">Speech Analysis</h3>
            <p className="text-gray-600 text-sm">
              Analyze speech rate, pauses, and patterns to provide insights into
              speaking style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;