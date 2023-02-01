import { AnimatePresence } from "framer-motion";
import SearchBar from "../components/forms/SearchBar";
import AnimeList from "../components/lists/AnimeList";
import RecentSearches from "../components/lists/RecentSearches";
import Pagination from "../components/navigations/Pagination";
import useSearchAnime from "../hooks/useSearchAnime";

const Search = () => {
  const {
    searches,
    handleRecentItem,
    query,
    isSearching,
    handleInputChange,
    handleSearch,
    list,
    total,
    currentPage,
    hasNextPage,
    handlePrevPage,
    handleNextPage,
  } = useSearchAnime();

  return (
    <div className="wrapper pb-4 flex flex-col space-y-4">
      <SearchBar
        query={query}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <AnimatePresence>
        {searches.length !== 0 && (
          <RecentSearches
            searches={searches}
            handleRecentItem={handleRecentItem}
          />
        )}
      </AnimatePresence>
      <AnimeList list={list} isLoading={isSearching} />
      <AnimatePresence>
        {!isSearching && (
          <Pagination
            resultCount={list.length}
            total={total}
            current={currentPage}
            hasNext={hasNextPage}
            handlePrev={handlePrevPage}
            handleNext={handleNextPage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
