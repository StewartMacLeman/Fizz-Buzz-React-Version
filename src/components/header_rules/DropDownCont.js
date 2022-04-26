import React from "react";
import HowToPlay from "./HowToPlay";
import HowToScore from "./HowToScore";

const DropDownCont = (props) => {
  return (
    <div className="dropDownContainer">
      <HowToPlay />
      <HowToScore />

      <button type="button" onClick={props.toggleDropDown}>Hide Rules!</button>
    </div>
  );
};

export default DropDownCont;
