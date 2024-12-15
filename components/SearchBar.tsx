import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <form className="relative">
        <input
          type="text"
          placeholder="Search for events..."
          className="w-full py-3 px-4 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <BiSearch className=" absolute top-4 right-4 w-5 h-5 text-gray-400" />
      </form>
    </div>
  );
};

export default SearchBar;
