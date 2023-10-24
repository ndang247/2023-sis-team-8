// import React, { useState, useEffect } from 'react';

// const Typewriter = ({ text, delay }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentIndex < text.length) {
//         setDisplayText(text.substring(0, currentIndex + 1));
//         setCurrentIndex(currentIndex + 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, delay);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [text, delay, currentIndex]);

//   return (
//     <p className="w-[100%] relative overflow-hidden mb-8 pl-5 lg:w-[940px]">
//       {displayText}
//     </p>
//   );
// };

// export const Response = ({ apiResponse }) => {
//   const answer = apiResponse ? apiResponse.answer : null;

//   return (
//     <div className="response-container">
//       {answer ? (
//         <div className="response-data">
//           <Typewriter text={answer} delay={5} />
//         </div>
//       ) : (
//         <div className="no-response-message">No API response received yet.</div>
//       )}
//     </div>
//   );
// };

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

  return (
    <p>
      {displayText}
    </p>
  );
};

export const Response = ({ apiResponse }) => {
  const answer = apiResponse ? apiResponse.answer : null;

  return (
    <div className="response-container">
      {answer ? (
        <div className="response-data text-left"> {/* Add text-center class */}
          <Typewriter text={answer} delay={5} />
        </div>
      ) : (
        <div className="no-response-message">No API response received yet.</div>
      )}
    </div>
  );
};
