import { useState } from "react";

const FilterComponent = ({ onChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("latest");

  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    const newPriceRange =
      name === "minPrice"
        ? [Number(value), priceRange[1]]
        : [priceRange[0], Number(value)];
    setPriceRange(newPriceRange);
    onChange({ priceRange: newPriceRange });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    onChange({ sortBy: e.target.value });
  };

  const handleResetFilters = () => {
    setPriceRange([0, 1000]);
    setSortBy("latest");
    onChange({ priceRange: [0, 1000], sortBy: "latest" });
  };

  return (
    <div>
      <div className="filter-section">
        <label className="text-white">Price Range:</label>
        <div>
          <input
            type="number"
            name="minPrice"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="price-input"
          />
          <span className="text-white"> - </span>
          <input
            type="number"
            name="maxPrice"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="price-input"
          />
        </div>
      </div>
      <div className="filter-section">
        <label className="text-white">Sort By:</label>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="sort-select"
        >
          <option value="latest">Latest</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      <button onClick={handleResetFilters} className="reset-button">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterComponent;
