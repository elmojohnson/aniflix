import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Review } from "../interface";

const useAnimeReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getReviews = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/reviews`
      );
      setReviews(result.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return { reviews, isLoading };
};

export default useAnimeReviews;
