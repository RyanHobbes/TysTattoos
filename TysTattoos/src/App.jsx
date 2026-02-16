import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TyLogo from "./assets/Ty-logo-tmp.png";


function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={TyLogo} alt="2" className="logo-img"/>
          Ty's Tattoos
          </div>
       <nav>
  <Link to="/">Home</Link>
  <Link to="/contact">Contact</Link>
  <a href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdv1qBmWDSJG0toPvnMp_LsTu8BlCeLvs7vIAsmtMATgnEUew%2Fviewform%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkBlhWFrSbErBvNK3Ffh0z_YtMWwJ0NjePRiTb-tXXgL4doI1USMRvc4vO18_aem_skebM3ruhc4wXYTkie_Esw&e=AT0Rmr3yhV7fTBzV7NJuwgFSMNju_1rso3JfxF0-9fkAWlKgf_F0scml0CNxIZSFYpaImwJKrtfiZMSqp-Kr7UBFAOpW71CLQivGfhjh3Q" className="book-btn">Book Now</a>
</nav>

      </header>

      {/* Main content */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        © 2026 Ty's Tattoos | Designed by Ryan
      </footer>
    </>
  );
}

export default App;
