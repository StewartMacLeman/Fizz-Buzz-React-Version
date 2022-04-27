import React from "react";

const AnswerSubmitButtons = (props) => {
    return (
    <div className={props.showAnswerButtons ? "answerSelectonCont" : "hide"}>
      <h2>Answer Buttons.</h2>
      <div className="gameAnswerButtonsCont">
        <button type="button" value="fizz" onClick={props.submitAnswer}>Fizz</button>
        <button type="button" value="buzz" onClick={props.submitAnswer}>Buzz</button>
      </div>
      <div className="gameAnswerButtonsCont">
        <button type="button" value="none" onClick={props.submitAnswer}>None</button>
        <button type="button" value="fizz_buzz" onClick={props.submitAnswer}>Fizz-Buzz</button>
      </div>
    </div>
    )
}

export default AnswerSubmitButtons;