import React from "react";
import { motion } from "framer-motion";

const RecentSearches: React.FC<{
  searches: [];
  handleRecentItem: (value?: any) => void;
}> = ({ searches, handleRecentItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h5 className="text-muted mb-2">Recent Searches</h5>
      <div className="flex items-center space-x-3 overflow-x-scroll scrollbar-hide">
        {searches.slice(0, 10).map((s, i) => {
          return (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileTap={{scale: 0.92}}
              key={i}
              className="bg-muted px-3 py-1 rounded-full hover:brightness-75 whitespace-nowrap"
              onClick={() => handleRecentItem(s)}
            >
              {s}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RecentSearches;
