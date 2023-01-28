import useAnimeList from "../hooks/useAnimeList";
import Pagination from "../components/navigations/Pagination";
import AnimeList from "../components/lists/AnimeList";

const Home = () => {
  const {
    list,
    isLoading,
    total,
    currentPage,
    hasNextPage,
    handlePrevPage,
    handleNextPage,
  } = useAnimeList();

  return (
    <div className="wrapper pb-4">
      <h1 className="text-2xl font-bold text-white mb-4">Anime List</h1>
      <AnimeList list={list} isLoading={isLoading} />
      {!isLoading && (
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

export default Home;
