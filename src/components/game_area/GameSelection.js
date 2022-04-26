import React from "react";

const GameSelection = () => {
  return (
    <div className="gameSelectonCont">
      <h2>Select the type of game to play.</h2>
      <div className="gameSelcButtonsCont">
        <button type="button" value="normal">
          Normal
        </button>
        <button type="button" value="random">
          Random
        </button>
      </div>
    </div>
  );
};

export default GameSelection;
