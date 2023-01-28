import { NavLink, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const AnimeTabNavigation = () => {
  const location = useLocation();
  const { id } = useParams();

  let links = [
    {
      label: "About",
      href: "",
    },
    {
      label: "Episodes",
      href: "episodes",
    },
    {
      label: "Trailer",
      href: "trailer",
    },
    {
      label: "Characters",
      href: "characters",
    },
    {
      label: "Recommendations",
      href: "recommendations",
    },
    {
      label: "Reviews",
      href: "reviews",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white flex items-center border-b border-gray-800 mb-4 overflow-x-scroll scrollbar-hide"
    >
      {links.map((link, i) => {
        // Current location (Custom)
        const currentLocation =
          link.href === ""
            ? location.pathname.replace(`/anime/${id}`, "")
            : location.pathname.replace(`/anime/${id}/`, "");

        return (
          <NavLink
            key={i}
            to={link.href}
            className="px-4 py-2 relative flex flex-col items-center justify-center font-semibold"
          >
            <span className="z-50">{link.label}</span>
            {currentLocation === link.href && <motion.div className="bg-primary h-full w-full absolute rounded-sm" layoutId="underline" />}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

export default AnimeTabNavigation;
