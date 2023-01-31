import axios from "axios";
import React, { useEffect, useState } from "react";
import { Anime } from "../interface";

const useRecentAnimeRecommendations = () => {
  const [list, setList] = useState<Anime[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getAnime = async () => {
    try {
      setLoading(true);
      const result = await axios.get("https://api.jikan.moe/v4/recommendations/anime");
      console.log(result.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnime();
  }, [])

  return { list, isLoading };
};

export default useRecentAnimeRecommendations;
