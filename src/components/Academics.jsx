import React from 'react';
import './Academics.css';
import imgMethodology from '../assets/44A3F58AE048BB29BF20B9C6850198EE.jpg';
import imgTraits from '../assets/Top10_Essential_Trait_GoodStudent.jpg-870x437.webp';
import imgFuture from '../assets/writing-student-and-education-with-girl-in-classroom-for-learning-future-and-youth-scholarship-academy-and-growth-with-portrait-of-kid-in-school-for-child-development-knowledge-and-lesson-photo.jpg';

const Academics = () => {
  return (
    <section id="academics" className="section academics-section">
      <div className="container">
        <h2 className="title">Our Approach to Studies</h2>
        <p className="title-sub">
          At The PathShala Public High School, we go beyond textbooks to provide a holistic educational experience that shapes the leaders of tomorrow.
        </p>

        <div className="academics-container">
          
          <div className="academic-block">
            <img src={imgMethodology} alt="Modern Educational Methodology" loading="lazy" />
            <div className="academic-text">
              <h3>Modern Educational Methodology</h3>
              <p>
                Our curriculum integrates the latest academic methodologies to ensure that each student not only learns but understands. We emphasize critical thinking, practical application, and interactive learning over rote memorization. 
              </p>
              <p>
                Teachers serve as facilitators deeply invested in discovering the distinct talents of each student. By fostering an engaging classroom setting, we ensure that the pursuit of knowledge is a joyous and rewarding journey.
              </p>
            </div>
          </div>

          <div className="academic-block">
            <img src={imgTraits} alt="Fostering Essential Traits" loading="lazy" />
            <div className="academic-text">
              <h3>Fostering Essential Character Traits</h3>
              <p>
                We believe that a good student isn't just defined by their grades but by their character. Our schooling ecosystem is purposefully designed to cultivate discipline, resilience, and compassion.
              </p>
              <p>
                From maintaining moral integrity to cultivating strong leadership and communication skills, our students participate in group activities, debates, and community service that instill life-long core values.
              </p>
            </div>
          </div>

          <div className="academic-block">
            <img src={imgFuture} alt="Empowering the Future" loading="lazy" />
            <div className="academic-text">
              <h3>Empowering Youth for the Future</h3>
              <p>
                Education is the foundation for future success. In our classrooms, youth are imparted with the necessary skills to thrive in an ever-evolving global society.
              </p>
              <p>
                By providing an environment conducive to self-discovery, technological literacy, and innovative problem solving, we give our students the wings to pursue scholarships, higher education, and fulfilling careers moving forward.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Academics;
