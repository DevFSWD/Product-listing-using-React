import React from 'react';

const Header = ({ searchTerm, setSearchTerm, category, setCategory, sortOption, setSortOption }) => {
  return (
    <div className="bg-white shadow p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded">
        <option value="All">All Categories</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
      </select>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="border p-2 rounded">
        <option value="">Sort</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default Header