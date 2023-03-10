import axios from "axios";
import React, { useEffect, useState } from "react";
import { Anime } from "../interface";

const useSearchAnime = () => {
  // Recent searches
  const [searches, setSearches] = useState<[]>([]);
  const [recentQuery, setRecentQuery] = useState<string>("");

  // Query
  const [query, setQuery] = useState<string>("");
  const [isSearching, setSearching] = useState<boolean>(false);

  // Data
  const [list, setList] = useState<Anime[]>([]);

  // Pagination
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  // On input change
  const handleInputChange = (e: any) => setQuery(e.target.value);

  // Search
  const handleSearch = async () => {
    if(!query) {
      return
    }
    // Add to recent searches
    let recent = JSON.parse(localStorage.getItem("recent_searches") || "[]");
    if(!recent.includes(query)) {
      localStorage.setItem("recent_searches", JSON.stringify([query, ...recent]));
    }

    // Search anime
    try {
      setSearching(true);
      const result = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&page=${currentPage}&limit=20`);

      setList(result.data.data);
      total === 0 && setTotal(result.data.pagination.last_visible_page);
      setHasNextPage(result.data.pagination.has_next_page);

      setRecentQuery("")
    } catch (error) {
      console.error(error);
    } finally {
      setSearching(false);
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

  // On click recent search item
  const handleRecentItem = (value?: any) => {
    setList([]);
    setCurrentPage(1);
    setTotal(0);
    setHasNextPage(false);
    setRecentQuery(value);
    setQuery(value);
  }

  // Search on first load and changed current page
  useEffect(() => {
    query && handleSearch();
  }, [currentPage]);  

  // When recent search item is clicked
  useEffect(() => {
    if(recentQuery) {
      setQuery(recentQuery);
      handleSearch();
    }
  }, [recentQuery]); 

  // Load recent searches
  useEffect(() => {
    setSearches(JSON.parse(localStorage.getItem("recent_searches") || "[]"))
  }, [list]) 

  return { searches, handleRecentItem, query, isSearching, handleInputChange, handleSearch, list, total, currentPage, hasNextPage, handlePrevPage, handleNextPage };
};

export default useSearchAnime;
