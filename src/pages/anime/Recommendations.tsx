import AnimeList from "../../components/lists/AnimeList";
import useAnimeRecommendations from "../../hooks/useAnimeRecommendations";

const Recommendations = () => {
  const { list, isLoading } = useAnimeRecommendations();
  
  return <AnimeList list={list} isLoading={isLoading} />
};

export default Recommendations;
