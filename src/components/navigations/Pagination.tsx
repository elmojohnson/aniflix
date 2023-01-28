import React from "react";

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
    <div className="flex items-center justify-between font-semibold mt-4">
      <span className="text-muted">
        Page {page.current} of {page.total.toLocaleString("en-US")}
      </span>
      <div className="flex items-center space-x-3">
        {page.current > 1 && (
          <Button handleClick={page.handlePrev} label="Previous" />
        )}
        {page.hasNext && <Button handleClick={page.handleNext} label="Next" />}
      </div>
    </div>
  );
};

const Button: React.FC<Button> = (button) => {
  return (
    <button
      className="bg-primary px-3 py-1 rounded-sm hover:brightness-75 flex space-x-1 items-center justify-between"
      onClick={button.handleClick}
    >
      <span>{button.label}</span>
    </button>
  );
};

export default Pagination;
