import React from "react";

const AnswerSubmitButtons = (props) => {
    return (
    <div className={props.showAnswerButtons ? "answerSelectonCont" : "hide"}>
      <h2>Answer Buttons.</h2>
      <div className="gameAnswerButtonsCont">
        <button type="button" value="fizz">Fizz</button>
        <button type="button" value="buzz">Buzz</button>
      </div>
      <div className="gameAnswerButtonsCont">
        <button type="button" value="none">None</button>
        <button type="button" value="fizz_buzz">Fizz-Buzz</button>
      </div>
    </div>
    )
}

export default AnswerSubmitButtons;