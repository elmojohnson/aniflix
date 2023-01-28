import React from "react";
import { Anime } from "../../interface";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const AnimeItem: React.FC<Anime> = (anime) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{duration: 0.2}}
      className="text-white flex flex-col bg-gray-800 rounded-sm overflow-hidden shadow-xl"
    >
      <div
        className="bg-center bg-no-repeat bg-cover w-full lg:h-72 h-52"
        style={{ backgroundImage: `url(${anime.images?.webp.image_url})` }}
      />
      <div className="p-3 flex flex-col justify-between h-24">
        <NavLink to={"/anime/" + anime.mal_id} className="font-semibold line-clamp-2 hover:text-primary">{anime.title}</NavLink>
        {anime.episodes && <small className="text-muted">{anime.episodes} episodes</small>}
      </div>
    </motion.div>
  );
};

export default AnimeItem;
