import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Episode } from "../interface";
import axios from "axios";

const useEpisodes = () => {
  const { id } = useParams();

  // Data
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLoadingMore, setLoadingMore] = useState<boolean>(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  // Fetch
  const getEpisodes = async () => {
    try {
      episodes.length === 0 ? setLoading(true) : setLoadingMore(true);
      const result = await axios.get(`https://api.jikan.moe/v4/anime/${id}/videos/episodes?page=${currentPage}`);
      
      setEpisodes([...episodes, ...result.data.data]);
      setHasNextPage(result.data.pagination.has_next_page);
    } catch (error) {
      console.error(error);
    } finally {
      episodes.length === 0 ? setLoading(false) : setLoadingMore(false);
    }
  };

  // Load more on click
  const loadMoreEpisodes = () => {
    hasNextPage && setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getEpisodes();
  }, [currentPage]);

  return { episodes, isLoading, isLoadingMore, hasNextPage, loadMoreEpisodes };
};

export default useEpisodes;
