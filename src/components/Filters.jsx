import React from "react";

export default function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({...filters, [e.target.name]: e.target.value});
  };

  const clear = () => setFilters({
    location: "", priceMin: "", priceMax: "", type: "all", bedrooms:"", bathrooms:""
  });

  return (
    <div className="filters-grid">
      <input className="input" name="location" value={filters.location} onChange={handleChange} placeholder="Location (city or zip)" />
      <input className="input small" name="priceMin" value={filters.priceMin} onChange={handleChange} placeholder="Min Price" type="number" />
      <input className="input small" name="priceMax" value={filters.priceMax} onChange={handleChange} placeholder="Max Price" type="number" />
      <select className="input" name="type" value={filters.type} onChange={handleChange}>
        <option value="all">All Types</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="plot">Plot</option>
      </select>
      <input className="input small" name="bedrooms" value={filters.bedrooms} onChange={handleChange} placeholder="Bedrooms" type="number" />
      <input className="input small" name="bathrooms" value={filters.bathrooms} onChange={handleChange} placeholder="Bathrooms" type="number" />
      <div className="filter-actions">
        <button className="btn-outline" onClick={clear}>Search</button>
      </div>
    </div>
  );
}
