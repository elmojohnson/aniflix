import React from "react";

const ReviewItemLoading = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded flex flex-col space-y-4 h-44">
      <div className="flex items-center space-x-3">
        <div className="bg-center bg-no-repeat bg-cover bg-gray-700 w-12 h-12 rounded-full" />
        <div className="leading-none w-full">
          <div className="flex items-start justify-between">
            <div className="bg-gray-700 h-5 rounded animate-pulse w-1/2" />
            <div className="bg-gray-700 h-3 rounded animate-pulse w-20" />
          </div>
          <div className="bg-gray-700 h-3 rounded animate-pulse w-20 mt-2" />
        </div>
      </div>

      <div className="bg-gray-700 h-5 rounded animate-pulse w-24" />

      <div className="flex flex-col space-y-2">
        <div className="bg-gray-700 h-3 rounded animate-pulse" />
        <div className="bg-gray-700 h-3 rounded animate-pulse" />
        <div className="bg-gray-700 h-3 rounded animate-pulse w-1/2" />
      </div>
    </div>
  );
};

export default ReviewItemLoading;
