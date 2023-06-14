import React, { useState, useEffect } from 'react';
import { IconButton, useScrollTrigger, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button if the user has scrolled down more than 300 pixels
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener to track scroll position
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    // Scroll smoothly back to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          opacity: isVisible ? 0.6 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <IconButton aria-label="back to top" color="inherit">
          <KeyboardArrowUpIcon />
        </IconButton>
      </div>
    </Zoom>
  );
};

export default BackToTopButton;
