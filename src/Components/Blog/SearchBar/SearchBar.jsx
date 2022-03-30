import React from "react";
import { FaTimes } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div >
      <input
      className="search-input"
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search..."
      />
      {value && (
        <span className="clear" onClick={onClear}>
          <FaTimes />
        </span>
      )}
    </div>
  );
};

export default SearchBar;
