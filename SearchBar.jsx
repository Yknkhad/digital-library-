import React from 'react';

// SearchBar component to capture search input
const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by title, author, or genre"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)} // Update search term
      />
    </div>
  );
};

export default SearchBar;
