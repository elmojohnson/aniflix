import React from "react";
import { motion } from "framer-motion";

interface Pagination {
  total: number;
  current: number;
  handlePrev: () => void;
  handleNext: () => void;
  hasNext: boolean;
}

interface Button {
  label: string;
  handleClick: () => void;
}

const Pagination: React.FC<Pagination> = (page) => {
  return (
    <div className="flex items-center justify-center space-x-3 mt-8">
      {page.current > 1 && (
        <Button handleClick={page.handlePrev} label="Previous" />
      )}
      {page.hasNext && <Button handleClick={page.handleNext} label="Next" />}
    </div>
  );
};

const Button: React.FC<Button> = (button) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary px-3 py-1 rounded-sm hover:brightness-75 font-semibold"
      onClick={button.handleClick}
    >
      <span>{button.label}</span>
    </motion.button>
  );
};

export default Pagination;
