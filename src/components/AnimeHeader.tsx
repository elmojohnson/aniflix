import React from "react";
import { Anime } from "../interface";
import { motion } from "framer-motion";

const AnimeHeader: React.FC<Anime> = (anime) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-4 bg-gradient-to-t from-gray-900 to-gray-700"
    >
      <div className="text-white flex md:flex-row flex-col md:items-end items-center md:space-x-6 space-x-0 md:space-y-0 space-y-6 wrapper">
        <img
          src={anime?.images?.webp.large_image_url}
          className="w-44 shadow-2xl"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl mb-4">{anime?.title}</h1>
          <small className="text-lg text-muted leading-tight">
            {anime?.genres?.map((genre) => genre.name).join(", ")}
          </small>
          <small className="text-lg text-muted leading-tight">
            {anime?.demographics?.map((demo) => demo.name).join(", ")}
          </small>
          <div className="flex space-x-6 mt-6">
            <div className="flex items-center space-x-2 text-lg">
              <label className="text-muted">Score</label>
              <h5 className="font-bold text-primary">{anime.score}</h5>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <label className="text-muted">Ranked</label>
              <h5 className="font-bold text-primary">#{anime.rank}</h5>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimeHeader;
