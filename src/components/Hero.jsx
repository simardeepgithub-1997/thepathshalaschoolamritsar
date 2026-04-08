import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero_school_building_1775640904530.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-subtitle animate-fade-in" style={{opacity: 0}}>Welcome to Excellence</div>
        <h1 className="hero-title animate-fade-in" style={{opacity: 0}}>THE PATHSHALA PUBLIC HIGH SCHOOL</h1>
        <p className="hero-desc animate-fade-in" style={{opacity: 0}}>
          A premier higher secondary school in Punjab dedicated to shaping the leaders of tomorrow through holistic education, state-of-the-art facilities, and a commitment to academic excellence.
        </p>
        <div className="hero-actions animate-fade-in" style={{opacity: 0}}>
          <button className="btn btn-primary" onClick={() => window.scrollTo({top: document.getElementById('about').offsetTop, behavior: 'smooth'})}>Explore Our School</button>
          <button className="btn btn-outline" onClick={() => window.scrollTo({top: document.getElementById('contact').offsetTop, behavior: 'smooth'})}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
