import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Streaming } from "../interface";

const useStreamingSites = () => {
  const { id } = useParams();
  const [sites, setSites] = useState<Streaming[]>([]);

  const getSites = async () => {
    try {
      const result = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/streaming`
      );
      setSites(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSites();
  }, []);

  return { sites };
};

export default useStreamingSites;
