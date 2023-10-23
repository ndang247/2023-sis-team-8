import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [text, delay, currentIndex]);

  return <pre>{displayText}</pre>;
};

export const SearchResponse = ({ apiResponse }) => {
  const answer = apiResponse ? apiResponse : null;

  return (
    <div className="response-container">
      {answer ? (
        <div className="response-data">
          <Typewriter text={answer} delay={10} />
        </div>
      ) : (
        <div className="no-response-message">No API response received yet.</div>
      )}
    </div>
  );
};
