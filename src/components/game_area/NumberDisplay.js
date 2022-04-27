import React from "react";

const NumberDisplay = (props) => {
  return (
    <p className={props.showNumber ? "number" : "hide"}>
      Number: {props.displayedNumber}
    </p>
  );
};

export default NumberDisplay;
