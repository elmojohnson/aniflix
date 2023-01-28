import React from "react";

const AnimeItemLoading = () => {
  return (
    <div className="bg-gray-800 flex flex-col rounded">
      <div className="bg-gray-700 lg:h-72 h-52 w-full animate-pulse" />
      <div className="m-4 flex flex-col space-y-2">
        <div className="bg-gray-700 h-3 rounded animate-pulse" />
        <div className="bg-gray-700 h-3 rounded animate-pulse w-14" />
      </div>
    </div>
  );
};

export default AnimeItemLoading;
