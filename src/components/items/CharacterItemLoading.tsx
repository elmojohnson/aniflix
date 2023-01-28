import React from "react";

const CharacterItemLoading = () => {
  return (
    <div className="bg-gray-800 flex items-center rounded overflow-hidden">
      <div className="bg-gray-700 animate-pulse w-24 h-32" />
      <div className="p-4 flex flex-col space-y-2 w-full">
        <div className="bg-gray-700 h-5 rounded animate-pulse w-1/2" />
        <div className="bg-gray-700 h-3 rounded animate-pulse w-20" />
      </div>
    </div>
  );
};

export default CharacterItemLoading;
