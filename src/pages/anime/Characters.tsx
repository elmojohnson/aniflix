import useAnimeCharacters from "../../hooks/useAnimeCharacters";

import CharacterItem from "../../components/items/CharacterItem";
import CharacterItemLoading from "../../components/items/CharacterItemLoading";

import { motion, AnimatePresence } from "framer-motion";

const Characters = () => {
  const { characters, isLoading } = useAnimeCharacters();
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 grid-cols-1 gap-4"
        >
          {[...Array(15)].map((_, i) => {
            return <CharacterItemLoading key={i} />;
          })}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 grid-cols-1 gap-4"
        >
          {characters.map((character) => {
            return (
              <CharacterItem key={character.character.mal_id} {...character} />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Characters;
