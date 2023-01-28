import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimeCharacter } from "../interface";

const useAnimeCharacters = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState<AnimeCharacter[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getCharacters = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`);

      setCharacters(result.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters()
  }, [])

  return { characters, isLoading };
};

export default useAnimeCharacters;
