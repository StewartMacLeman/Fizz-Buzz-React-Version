import React, {useState} from "react";
import DropDownCont from "./DropDownCont";

const Header = () => {

const [showRules, setShowRules] = useState(false);
const [hideRules, setHideRules] = useState(true);

const toggleDropDown = () => {
    setShowRules(showRules => !showRules);
    setHideRules(hideRules => !hideRules);
}
  return (
    <header className="headerStyle">
      <h1 className="titleStyle">Fizz-Buzz</h1>
      <button className={!showRules ? "" : "hide"} type="button" onClick={toggleDropDown}>How to Play!</button>
      {!hideRules && <DropDownCont toggleDropDown={toggleDropDown}/>}
    </header>
  );
};

export default Header;
