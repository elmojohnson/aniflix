import { useContext } from "react";
import AnimeContext from "../../contexts/AnimeContext";
import { motion } from "framer-motion";
import useStreamingSites from "../../hooks/useStreamingSites";

const About = () => {
  const anime = useContext(AnimeContext);
  const { sites } = useStreamingSites();

  const openSite = (url?: string) => window.open(url, "_blank");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white flex flex-col space-y-8"
    >
      {anime.background && (
        <div>
          <h5 className="font-bold text-lg text-primary">Background</h5>
          <p className="whitespace-pre-line">{anime.background}</p>
        </div>
      )}
      <div>
        <h5 className="font-bold text-lg text-primary">Synopsis</h5>
        <p className="whitespace-pre-line">{anime.synopsis}</p>
      </div>
      <div>
        <h5 className="font-bold text-lg text-primary">Information</h5>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          <InfoItem label="Type" text={anime.type} />
          <InfoItem label="Episodes" text={anime.episodes?.toString()} />
          <InfoItem label="Status" text={anime.status} />
          <InfoItem label="Aired" text={anime.aired?.string} />
          <InfoItem label="Broadcast" text={anime.broadcast?.string} />
          <InfoItem
            label="Producers"
            text={anime.producers?.map((producer) => producer.name).join(", ")}
          />
          <InfoItem
            label="Licensors"
            text={anime.licensors?.map((licencor) => licencor.name).join(", ")}
          />
          <InfoItem
            label="Studios"
            text={anime.studios?.map((studio) => studio.name).join(", ")}
          />
          <InfoItem label="Source" text={anime.source} />
          <InfoItem
            label="Genres"
            text={anime.genres?.map((genre) => genre.name).join(", ")}
          />
          <InfoItem
            label="Themes"
            text={anime.themes?.map((theme) => theme.name).join(", ")}
          />
          <InfoItem
            label="Demographic"
            text={anime.demographics?.map((demo) => demo.name).join(", ")}
          />
          <InfoItem label="Duration" text={anime.duration} />
          <InfoItem label="Rating" text={anime.rating} />
        </div>
      </div>
      <div>
        <h5 className="font-bold text-lg text-primary">Watch on</h5>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {sites.map((site, i) => {
            return <p key={i} className="hover:text-primary hover:underline hover:cursor-pointer" onClick={() => openSite(site.url)}>{site.name}</p>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

interface InfoItem {
  label?: string;
  text?: string;
}

const InfoItem: React.FC<InfoItem> = ({ label, text }) => {
  return (
    <div className="leading-tight">
      <label className="text-muted font-semibold text-sm">{label}</label>
      <p>{text}</p>
    </div>
  );
};

export default About;
