import React from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="d-flex justify-content-end me-4">
        <button className="scroll-to-top rounded-pill" onClick={scrollToTop}>
            <FaArrowCircleUp size={42} />
        </button>
    </div>
  );
};

export default ScrollToTopButton;
