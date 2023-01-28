import { useContext } from "react";
import YouTube from "react-youtube";
import AnimeContext from "../../contexts/AnimeContext";

const Trailer = () => {
  const { trailer } = useContext(AnimeContext);

  return (
    <div className="flex items-center justify-center">
      {trailer?.youtube_id && <YouTube videoId={trailer?.youtube_id} />}
    </div>
  );
};

export default Trailer;
