import React from "react";
import HeroLogo from "../assets/Ty-hero.png"; // small image in the hero section

export default function Home() {
  return (
    <div>
      <img src={HeroLogo} alt="Ty's Logo" className="hero-logo" />
      <h1>Welcome to Ty's Tattoos</h1>
      <p>Custom tattoo work. Clean lines. Bold designs.</p>
    </div>
  );
}
