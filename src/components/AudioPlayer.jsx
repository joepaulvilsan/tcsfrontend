// src/components/AudioPlayer.jsx
import React, { useEffect, useRef, useState } from "react";

const AudioPlayer = ({ file }) => {
  const audioRef = useRef(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioUrl]);

  const handlePlay = () => audioRef.current?.play();
  const handlePause = () => audioRef.current?.pause();
  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  return (
    <div>
      {audioUrl ? (
        <>
          <audio ref={audioRef} src={audioUrl} />

          {/* Playback Controls */}
          <div className="flex items-center space-x-2 mb-4 mt-2">
            <button
              onClick={handlePlay}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
            >
              Play
            </button>
            <button
              onClick={handlePause}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
            >
              Pause
            </button>
          </div>

          {/* Progress & Time Display */}
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max={duration}
              step="0.01"
              value={currentTime}
              onChange={handleSeek}
              className="flex-1"
            />
            <span className="text-sm text-gray-700">
              {currentTime.toFixed(2)} / {duration.toFixed(2)} sec
            </span>
          </div>
        </>
      ) : (
        <p>No audio file selected.</p>
      )}
    </div>
  );
};

export default AudioPlayer;