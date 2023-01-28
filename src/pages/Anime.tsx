import useAnime from "../hooks/useAnime";
import AnimeContext from "../contexts/AnimeContext";
import { Outlet } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import LoadingSpinner from "../components/LoadingSpinner";
import AnimeHeader from "../components/AnimeHeader";
import AnimeTabNavigation from "../components/navigations/AnimeTabNavigation";

const Anime = () => {
  const { anime, isLoading } = useAnime();

  return (
    <AnimeContext.Provider value={{...anime}}>
      <AnimatePresence>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col space-y-4 absolute top-0 w-full">
            <AnimeHeader {...anime} />
            <div className="wrapper pb-4">
              <AnimeTabNavigation />
              <Outlet />
            </div>
          </div>
        )}
      </AnimatePresence>
    </AnimeContext.Provider>
  );
};

export default Anime;
