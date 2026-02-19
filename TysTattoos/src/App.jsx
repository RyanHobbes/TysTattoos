import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import TyLogo from "./assets/Ty-logo-tmp.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">
          <img src={TyLogo} alt="Ty's Tattoos Logo" className="logo-img" />
          Ty's Tattoos
        </Link>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav links */}
        <nav className={menuOpen ? "open" : ""}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdv1qBmWDSJG0toPvnMp_LsTu8BlCeLvs7vIAsmtMATgnEUew/viewform"
            className="book-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="footer">
        © 2026 Ty's Tattoos | Designed by Ryan
      </footer>
    </>
  );
}
