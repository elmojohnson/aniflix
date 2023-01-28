import React from "react";
import { Episode } from "../../interface";

const EpisodeItem: React.FC<Episode> = (episode) => {
  return (
    <div className="flex items-center bg-gray-800 rounded-sm overflow-hidden">
      {episode.images?.jpg.image_url && (
        <img
          src={episode.images?.jpg.image_url}
          alt={episode.title}
          className="h-auto w-44"
        />
      )}
      <div className="flex flex-col p-4">
        <label className="text-primary">{episode.episode}</label>
        <h1 className="font-bold line-clamp-2">{episode.title}</h1>
      </div>
    </div>
  );
};

export default EpisodeItem;
