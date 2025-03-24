// src/components/SpeakerDiarizationTable.jsx
import React from "react";

const SpeakerDiarizationTable = ({ diarizationData }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      {diarizationData && diarizationData.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start (s)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End (s)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Speaker
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {diarizationData.map((segment, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{segment.start}</td>
                <td className="px-6 py-4 whitespace-nowrap">{segment.end}</td>
                <td className="px-6 py-4 whitespace-nowrap">{segment.speaker}</td>
                <td className="px-6 py-4 whitespace-nowrap">{segment.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{segment.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No diarization data available.</p>
      )}
    </div>
  );
};

export default SpeakerDiarizationTable;