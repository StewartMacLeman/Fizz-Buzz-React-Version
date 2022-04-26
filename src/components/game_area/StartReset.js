import React from "react";

const StartReset = (props) => {
  return (
    <>
      <button
        type="button"
        className={props.showStartButton ? "startResetButtons" : "hide"}
      >
        {props.content}
      </button>
      <button
        type="button"
        className={props.showResetButton ? "startResetButtons" : "hide"}
        onClick={props.reset}
      >
        Reset
      </button>
    </>
  );
};

export default StartReset;
