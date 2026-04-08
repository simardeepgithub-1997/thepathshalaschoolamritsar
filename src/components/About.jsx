import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="title">Academic Structure & Programs</h2>
      <p className="title-sub">We offer a highly structured academic environment focused on comprehensive growth from early childhood to higher secondary.</p>

      <div className="about-grid">
        <div className="about-card glass">
          <div className="about-icon">
            🎓
          </div>
          <h3>Grades 1 to 10</h3>
          <p>We provide standard schooling from Grades 1 to 10 with a rich curriculum designed by experts to build strong foundational knowledge.</p>
        </div>

        <div className="about-card glass">
          <div className="about-icon">
            🧸
          </div>
          <h3>Pre-Primary Section</h3>
          <p>An attached pre-primary section for our youngest learners, fostering early childhood education in a fun and secure environment.</p>
        </div>

        <div className="about-card glass">
          <div className="about-icon">
            📅
          </div>
          <h3>Academic Session</h3>
          <p>Our academic sessions commence in <strong>April</strong> every year. We ensure a structured timeline for assessments, co-curriculars, and holidays.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
