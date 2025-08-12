import React, { useState } from "react";
import Filters from "../components/Filters";
import PropertyList from "../components/PropertyList";
import propertiesData from "../data/properties";

export default function Home(){
  const [filters, setFilters] = useState({
    location: "", priceMin: "", priceMax: "", type: "all", bedrooms:"", bathrooms:""
  });

  const filtered = propertiesData.filter(p => {
    if(filters.location){
      const q = filters.location.toLowerCase();
      if(!p.location.toLowerCase().includes(q) && !p.zip?.includes(q)) return false;
    }
    if(filters.priceMin && p.price < Number(filters.priceMin)) return false;
    if(filters.priceMax && p.price > Number(filters.priceMax)) return false;
    if(filters.type && filters.type !== 'all' && p.type !== filters.type) return false;
    if(filters.bedrooms && p.bedrooms < Number(filters.bedrooms)) return false;
    if(filters.bathrooms && p.bathrooms < Number(filters.bathrooms)) return false;
    return true;
  });

  return (
    <main className="container">
      <section className="search-area">
        <Filters filters={filters} setFilters={setFilters} />
      </section>

      <h2 className="section-title">Featured Properties</h2>

      <PropertyList properties={filtered} />
    </main>
  );
}
