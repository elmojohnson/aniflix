import React from "react";
import { MdSearch } from "react-icons/md";

interface Search {
  query: string;
  handleInputChange: (e: any) => void;
  handleSearch: () => void;
}

const SearchBar: React.FC<Search> = ({
  query,
  handleInputChange,
  handleSearch,
}) => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-white mb-2">Search</h1>
      <div className="bg-gray-800 text-white rounded overflow-hidden flex items-center justify-between px-4 py-2">
        <input
          type="text"
          placeholder="Search anime"
          className="bg-transparent outline-none w-full"
          value={query}
          onChange={handleInputChange}
        />
        <button className="pl-4 text-xl" onClick={handleSearch}>
          <MdSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
