import useEpisodes from "../../hooks/useEpisodes";

import EpisodeItem from "../../components/items/EpisodeItem";
import EpisodeItemLoading from "../../components/items/EpisodeItemLoading";

import { motion } from "framer-motion";

const Episodes = () => {
  const { episodes, isLoading, isLoadingMore, hasNextPage, loadMoreEpisodes } =
    useEpisodes();

  return (
    <div className="text-white">
      <>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="grid lg:grid-cols-2 grid-cols-1 gap-4"
          >
            {[...Array(15)].map((_, i) => {
              return <EpisodeItemLoading key={i} />;
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col space-y-6"
          >
            {episodes.length === 0 && <p>Preview not available</p>}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {episodes.map((ep) => {
                return <EpisodeItem key={ep.mal_id} {...ep} />;
              })}
            </div>
            {hasNextPage && (
              <button
                onClick={loadMoreEpisodes}
                className="w-full px-3 py-2 hover:brightness-75 bg-primary text-white font-semibold text-center rounded-sm"
              >
                {isLoadingMore ? "Loading..." : "Load more"}
              </button>
            )}
          </motion.div>
        )}
      </>
    </div>
  );
};

export default Episodes;
