import React from 'react';
import './Facilities.css';
import libraryImg from '../assets/fac-library.png';
import playImg from '../assets/fac-playground.png';
import classroomImg from '../assets/fac-classrooms.webp';
import sanitationImg from '../assets/fac-sanitation.webp';

const Facilities = () => {
  return (
    <section id="facilities" className="section facilities">
      <div className="container">
        <h2 className="title">World-Class Facilities</h2>
        <p className="title-sub">We believe in providing an optimal environment for growth. Our campus is equipped with everything a student needs to succeed.</p>

        <div className="fac-grid">
          
          <div className="fac-card">
            <img src={classroomImg} alt="Spacious Classrooms" className="fac-img" />
            <div className="fac-content">
              <h3>17 Spacious Classrooms</h3>
              <p>Well-ventilated and modern classrooms designed to foster interactive learning and focus.</p>
            </div>
          </div>

          <div className="fac-card">
            <img src={libraryImg} alt="Library Interior" className="fac-img" />
            <div className="fac-content">
              <h3>Extensive Library</h3>
              <p>A quiet space for study and research, featuring a growing collection of over 260 books across various subjects.</p>
            </div>
          </div>

          <div className="fac-card">
            <img src={playImg} alt="Playground Campus" className="fac-img" />
            <div className="fac-content">
              <h3>Large Playground</h3>
              <p>A vast, vibrant playground for physical education, sports, and outdoor activities to keep students healthy and active.</p>
            </div>
          </div>

          <div className="fac-card">
            <img src={sanitationImg} alt="Sanitation & Hygiene" className="fac-img" />
            <div className="fac-content">
              <h3>Sanitation & Hygiene</h3>
              <p>Clean and well-maintained separate toilet facilities for boys and girls, prioritizing student hygiene.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Facilities;
