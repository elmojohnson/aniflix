import axios from "axios";
import { useState, useEffect } from "react";
import { Anime } from "../interface";

const useAnimeList = () => {
  // Data
  const [list, setList] = useState<Anime[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  // Pagination
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  // Fetch data
  const getAnimeList = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${currentPage}&limit=20`);
      
      total === 0 && setTotal(Math.round(result.data.pagination.items.total / 20 - currentPage));
      setList(result.data.data);
      setHasNextPage(result.data.pagination.has_next_page);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // onClick next page
  const handleNextPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    hasNextPage && setCurrentPage(currentPage + 1);
  }

  // onClick previous page
  const handlePrevPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    getAnimeList();
  }, [currentPage]);

  return { list, isLoading, total, currentPage, hasNextPage, handlePrevPage, handleNextPage };
};

export default useAnimeList;
