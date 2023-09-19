import React, { useState, useEffect } from "react";

export const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      {currentText}
      {/* When text reach the end remove the cursor */}
      {currentIndex < text.length && <span>|</span>}
    </>
  );
};

// Reference the implementation of Typewriter
// https://blog.logrocket.com/3-ways-implement-typing-animation-react/
