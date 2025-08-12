import React, { useState, useRef, useEffect } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favorites')||'[]'); } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem('favorites', JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  const onFavToggle = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id]);
  };

  const loaderRef = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setVisibleCount(v => Math.min(properties.length, v + 6));
        }
      });
    }, { root: null, rootMargin: '200px', threshold: 0.1 });
    if(loaderRef.current) obs.observe(loaderRef.current);
    return () => obs.disconnect();
  }, [properties.length]);

  const visible = properties.slice(0, visibleCount);

  return (
    <>
      <div className="property-grid">
        {visible.length === 0 ? <div className="no-results">No properties found.</div> :
          visible.map(p => <PropertyCard key={p.id} property={p} onFavToggle={onFavToggle} isFav={favorites.includes(p.id)} />)
        }
      </div>

      <div ref={loaderRef} style={{height: '40px', margin: '20px 0'}} aria-hidden="true">
        {visibleCount < properties.length ? <p style={{textAlign:'center'}}>Loading more...</p> : <p style={{textAlign:'center'}}>End of results</p>}
      </div>
    </>
  );
}
