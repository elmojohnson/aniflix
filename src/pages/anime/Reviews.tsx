import useAnimeReviews from "../../hooks/useAnimeReviews";

import ReviewItem from "../../components/items/ReviewItem";
import ReviewItemLoading from "../../components/items/ReviewItemLoading";

import { AnimatePresence, motion } from "framer-motion";

const Reviews = () => {
  const { reviews, isLoading } = useAnimeReviews();
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col space-y-4"
        >
          {[...Array(15)].map((_, i) => {
            return <ReviewItemLoading key={i} />;
          })}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col space-y-4"
        >
          {reviews.map((review) => {
            return <ReviewItem key={review.mal_id} {...review} />;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Reviews;
