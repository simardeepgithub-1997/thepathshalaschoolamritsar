import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>THE PATHSHALA PUBLIC HIGH SCHOOL</h3>
            <p>
              A higher secondary school in Punjab, committed to nurturing young minds with knowledge, discipline, and a vision for the future.
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Contact Information</h3>
            <p>
              <span className="contact-icon">📍</span>
              <span>JV4J+CWG, Guru Nanak Colony, Guru Ram Das Nagar, Himatpura, Amritsar Cantt., Punjab 143006</span>
            </p>
            <p>
              <span className="contact-icon">📞</span>
              <span>183249019</span>
            </p>
          </div>

          <div className="footer-col">
            <h3>Location</h3>
            <div className="map-container">
              {/* Fallback map layout since we don't have exact coordinates, embedding a generic Amritsar area or just a styled placeholder */}
              <iframe 
                title="School Location Map"
                src="https://www.google.com/maps?q=Himatpura,+Amritsar+Cantt.,+Punjab+143006&output=embed" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The PathShala Public High School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
