import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties";
import { Helmet } from "react-helmet-async";
import L from "leaflet";

function ImageGallery({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <img
        src={images[index]}
        alt="main"
        style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 12 }}
      />
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={i}
            onClick={() => setIndex(i)}
            style={{
              width: 100,
              height: 72,
              objectFit: "cover",
              cursor: "pointer",
              borderRadius: 8,
              border: index === i ? "2px solid #1967d2" : "1px solid #eee"
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Map({ lat, lng }) {
  useEffect(() => {
    const map = L.map("detail-map", { scrollWheelZoom: false }).setView([lat, lng], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.marker([lat, lng]).addTo(map);
    return () => map.remove();
  }, [lat, lng]);

  return <div id="detail-map" style={{ height: 300, borderRadius: 8 }}></div>;
}

function ScheduleForm({ title }) {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted)
    return (
      <div className="success">
        Thanks {form.name || "there"} — visit scheduled for {title}.
      </div>
    );

  return (
    <form onSubmit={submit} className="schedule-form">
      <input name="name" required placeholder="Your name" value={form.name} onChange={handle} />
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        value={form.email}
        onChange={handle}
      />
      <input name="date" type="date" required value={form.date} onChange={handle} />
      <input name="time" type="time" required value={form.time} onChange={handle} />
      <button type="submit" className="btn-primary">
        Schedule Visit
      </button>
    </form>
  );
}

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prop = properties.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!prop) return <main className="container"><p>Property not found</p></main>;

  return (
    <main className="container">
      <Helmet>
        <title>{prop.title} | My Real Estate Site</title>
        <meta
          name="description"
          content={`Discover details about ${prop.title} in ${prop.location}, priced at $${prop.price.toLocaleString()}. Includes ${prop.bedrooms} bedrooms and ${prop.bathrooms} bathrooms.`}
        />
      </Helmet>

      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <h1 style={{ marginTop: 12 }}>{prop.title}</h1>

      <div className="detail-grid">
        <div>
          <ImageGallery images={prop.images} />
          <p style={{ marginTop: 12 }}>{prop.description}</p>
          <p><strong>Location:</strong> {prop.location}</p>
          <p><strong>Price:</strong> ${prop.price.toLocaleString()}</p>
          <p><strong>Bedrooms:</strong> {prop.bedrooms} • <strong>Bathrooms:</strong> {prop.bathrooms}</p>

          <h3>Map</h3>
          <Map lat={prop.lat} lng={prop.lng} />
        </div>

        <aside style={{ minWidth: 300, marginLeft: 24 }}>
          <div className="card" style={{ padding: 16 }}>
            <h3>Schedule a Visit</h3>
            <ScheduleForm title={prop.title} />
          </div>
        </aside>
      </div>
    </main>
  );
}
