import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/navigations/Navbar";

// Pages
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";

// Anime nested pages
import About from "./pages/anime/About";
import Trailer from "./pages/anime/Trailer";
import Episodes from "./pages/anime/Episodes";
import Characters from "./pages/anime/Characters";
import Recommendations from "./pages/anime/Recommendations";
import Reviews from "./pages/anime/Reviews";

import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-12 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<Anime />}>
            <Route index element={<About />} />
            <Route path="trailer" element={<Trailer />} />
            <Route path="episodes" element={<Episodes />} />
            <Route path="characters" element={<Characters />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <AnimatePresence>
          {showButton && (
            <motion.div
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -100}}
            className="fixed top-14 flex items-center justify-center w-full">
              <button
                className="bg-white text-black font-semibold rounded-full px-3 py-1 border shadow-xl"
                onClick={handleScrollToTop}
              >
                Scroll to top
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
