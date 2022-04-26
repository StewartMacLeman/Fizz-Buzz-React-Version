import React from "react";

const HowToPlay = () => {
  return (
    <>
      <h2>How to Play!</h2>
      <ol>
        <li className="playItem">Select a Normal or Random game.</li>
        <li className="playItem">Click the Start button to begin.</li>
        <li className="playItem">
          Select either None, Fizz, Buzz or Fizz-Buzz.
        </li>
        <li className="playItem">If correct, click Next Number!</li>
        <li className="playItem">If not, try again!</li>
        <li className="playItem">Click the Reset button to start-over.</li>
      </ol>
    </>
  );
};

export default HowToPlay;
