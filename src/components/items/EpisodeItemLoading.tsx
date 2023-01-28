import React from "react";

const EpisodeItemLoading = () => {
  return (
    <div className="flex items-center bg-gray-800 rounded-sm overflow-hidden">
      <div className="h-24 w-44 bg-gray-700" />
      <div className="flex flex-col space-y-2 p-4">
        <div className="bg-gray-700 h-3 rounded animate-pulse w-20" />
        <div className="bg-gray-700 h-5 rounded animate-pulse w-1/2" />
      </div>
    </div>
  );
};

export default EpisodeItemLoading;
