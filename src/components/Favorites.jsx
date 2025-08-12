import React, { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h2>My Favorite Properties</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((fav) => (
            <div key={fav.id} className="property-card">
              <img src={fav.image} alt={fav.title} />
              <h3>{fav.title}</h3>
              <p>{fav.location}</p>
              <p>₹{fav.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
