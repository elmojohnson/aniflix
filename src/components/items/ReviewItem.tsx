import moment from "moment";
import React, { useState } from "react";
import { Review } from "../../interface";
import { motion, AnimatePresence } from "framer-motion";

const ReviewItem: React.FC<Review> = (review) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [showSpoiler, setShowSpoiler] = useState<boolean>(false);

  return (
    <div className="bg-gray-800 text-white p-4 rounded flex flex-col space-y-4">
      <div className="flex items-center space-x-3">
        <div
          className="bg-center bg-no-repeat bg-cover w-12 h-12 rounded-full"
          style={{
            backgroundImage: `url(${review.user.images?.webp.image_url})`,
          }}
        />
        <div className="leading-none w-full">
          <div className="flex items-start justify-between">
            <h5 className="font-bold text-xl">{review.user.username}</h5>
            <div className="flex items-center space-x-2 bg-primary w-fit rounded px-3 py-1">
              <span className="font-semibold text-cyan-100">Score</span>
              <h5 className="font-bold text-xl text-gray-900">{review.score}</h5>
            </div>
          </div>
          <span className="text-primary">
            {review.tags?.map((tag) => tag).join(", ")}
          </span>
        </div>
      </div>

      <label className="text-muted text-xs md:flex hidden">
        {moment(review.date).format("MMMM Do YYYY, h:mm a")}
      </label>

      {review.is_spoiler && (
        <button
          className="bg-gray-900 hover:brightness-75 font-semibold px-3 py-1 rounded w-full"
          onClick={() => setShowSpoiler(!showSpoiler)}
        >
          {showSpoiler ? "Hide" : "Show"} Spoiler
        </button>
      )}

      <AnimatePresence>
        {showSpoiler || !review.is_spoiler ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <p
              className={`relative whitespace-pre-line ${
                !seeMore && "line-clamp-5"
              }`}
            >
              {review.review}
            </p>
            <button
              onClick={() => setSeeMore(!seeMore)}
              className="text-primary hover:brightness-75 w-fit self-center font-semibold"
            >
              {seeMore ? "Show less" : "See more"}
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ReviewItem;
