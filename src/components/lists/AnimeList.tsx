import { Anime } from "../../interface";
import AnimeItem from "../items/AnimeItem";
import { motion } from "framer-motion";
import AnimeItemLoading from "../items/AnimeItemLoading";

interface List {
  list: Anime[];
  isLoading: boolean;
}

const AnimeList = ({ list, isLoading }: List) => {
  return (
    <>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{delay: 0.2}}
          className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8"
        >
          {[...Array(15)].map((_, i) => {
            return <AnimeItemLoading key={i} />
          })}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{delay: 0.2}}
          className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8"
        >
          {list.map((anime: Anime) => {
            return <AnimeItem key={anime.mal_id} {...anime} />;
          })}
        </motion.div>
      )}
    </>
  );
};

export default AnimeList;
