import React from "react";

const GameSelection = (props) => {
  return (
    <div className={props.showSelection ? "gameSelectonCont" : "hide"}>
      <h2>Select the type of game to play.</h2>
      <div className="gameSelcButtonsCont">
        <button type="button" value="normal" onClick={props.gameSelection}>
          Normal
        </button>
        <button type="button" value="random" onClick={props.gameSelection}>
          Random
        </button>
      </div>
    </div>
  );
};

export default GameSelection;
