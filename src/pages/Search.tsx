import React from "react";
import SearchBar from "../components/forms/SearchBar";
import AnimeList from "../components/lists/AnimeList";
import Pagination from "../components/navigations/Pagination";
import useSearchAnime from "../hooks/useSearchAnime";

const Search = () => {
  const {
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
    <div className="wrapper pb-4 flex flex-col space-y-8">
      <SearchBar
        query={query}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <AnimeList list={list} isLoading={isSearching} />
      {!isSearching && (
        <Pagination
          total={total}
          current={currentPage}
          hasNext={hasNextPage}
          handlePrev={handlePrevPage}
          handleNext={handleNextPage}
        />
      )}
    </div>
  );
};

export default Search;
