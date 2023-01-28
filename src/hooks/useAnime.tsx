import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Anime } from "../interface";
import axios from "axios";

const useAnime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState<Anime>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const getAnime = async () => {
    try {
      setLoading(true);

      const result = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
      setAnime(result.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnime();
  }, [id])

  return { anime, isLoading };
};

export default useAnime;
