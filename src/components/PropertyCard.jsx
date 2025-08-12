import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favs.includes(property.id));
  }, [property.id]);

  const handleFavToggle = () => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFav) {
      favs = favs.filter((id) => id !== property.id);
    } else {
      favs.push(property.id);
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
    setIsFav(!isFav);
  };

  return (
    <div className="card">
      <div className="card-media">
        <Link to={`/property/${property.id}`}>
          <img src={property.images[0]} alt={property.title} />
        </Link>
        <button
          className={"fav-btn " + (isFav ? "fav-on" : "")}
          onClick={handleFavToggle}
          aria-label="favorite"
        >
          ♥
        </button>
      </div>
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/property/${property.id}`} className="card-link">
            {property.title}
          </Link>
        </h3>
        <p className="card-sub">{property.location}</p>
        <p className="card-price">${property.price.toLocaleString()}</p>
        <p className="card-meta">
          {property.bedrooms} bed • {property.bathrooms} bath • {property.type}
        </p>
      </div>
    </div>
  );
}
