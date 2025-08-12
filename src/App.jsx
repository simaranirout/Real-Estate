import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import FavoritesPage from "../src/components/Favorites";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <header className="site-header">
          <div className="brand">
            <Link to="/" className="brand-link">Real Estate Portal</Link>
          </div>
          <div className="header-right">
            <button className="sign-btn">Sign</button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>

        <footer className="site-footer">
          <p>Demo real estate</p>
        </footer>
      </Router>
    </HelmetProvider>
  );
}
