import React from "react";
import PropTypes from "prop-types";

const BookFilter = ({ filter, onFilterChange }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor="filter-select" style={{ marginRight: "10px" }}>
        Filter Status:
      </label>
      <select
        id="filter-select"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ padding: "5px", borderRadius: "4px" }}
      >
        <option value="">Semua</option>
        <option value="miliki">Miliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
};

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default BookFilter;
