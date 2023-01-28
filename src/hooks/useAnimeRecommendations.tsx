import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Anime } from "../interface";

const useAnimeRecommendations = () => {
  const { id } = useParams();
  const [list, setList] = useState<Anime[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getRecommendations = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/recommendations`
      );

      setList(result.data.data.map((anime: { entry: any; }) => anime.entry));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  return { list, isLoading };
};

export default useAnimeRecommendations;
