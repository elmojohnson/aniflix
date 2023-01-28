import React from "react";
import { AnimeCharacter } from "../../interface";
import { motion } from "framer-motion";

const CharacterItem: React.FC<AnimeCharacter> = (character) => {
  return (
    <div className="bg-gray-800 flex items-center rounded overflow-hidden">
      {character.character.images?.webp.image_url && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-start bg-no-repeat bg-cover w-24 h-32"
          style={{
            backgroundImage: `url(${character.character.images?.webp.image_url})`,
          }}
        />
      )}
      <div className="p-4">
        <h1 className="text-white font-bold text-xl leading-none">
          {character.character.name}
        </h1>
        <label className="text-muted leading-none">{character.role}</label>
      </div>
    </div>
  );
};

export default CharacterItem;
