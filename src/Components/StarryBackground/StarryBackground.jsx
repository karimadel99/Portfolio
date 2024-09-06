import React, { useEffect } from 'react';
import './StarryBackground.css';

const StarryBackground = () => {
  useEffect(() => {
    const starfield = document.querySelector('.starry-background');
    const numStars = 150; // Number of stars to generate

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.width = `${Math.random() * 3}px`; // Adjust size as needed
      star.style.height = star.style.width;
      starfield.appendChild(star);
    }
  }, []);

  return <div className="starry-background" />;
};

export default StarryBackground;
