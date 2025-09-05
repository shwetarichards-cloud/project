import React from 'react';
import './LogoCarousel.css';

const LogoCarousel = ({ logos }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-carousel">
      <div className="logo-carousel-track">
        {duplicatedLogos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo.src} alt={logo.alt} className="h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;