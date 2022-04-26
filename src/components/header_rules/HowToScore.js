import React from "react";

const HowToScore = () => {
  return (
    <>
      <h2>Fizz, Buzz or Fizz-Buzz?</h2>

      <div className="divisibleCont">
        <h3>Fizz</h3>
        <p>If the number is divisible by 3, but not 5, it's a Fizz!</p>
      </div>

      <div className="divisibleCont">
        <h3>Buzz</h3>
        <p>If the number is divisible by 5, but not 3, it's a Buzz!</p>
      </div>

      <div className="divisibleCont">
        <h3>Fizz-Buzz</h3>
        <p>
          If the number is divisible by <span>3 and 5</span>, it's a Fizz-Buzz!
        </p>
      </div>
    </>
  );
};

export default HowToScore;
