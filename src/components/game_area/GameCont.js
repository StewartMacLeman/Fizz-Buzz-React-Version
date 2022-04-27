import React, { useState, useEffect } from "react";
import Messages from "./Messages";
import GameSelection from "./GameSelection";
import NumberDisplay from "./NumberDisplay";
import AnswerSubmitButtons from "./AnswerSubmitButtons";
import StartReset from "./StartReset";

const GameCont = () => {
  const [messagePartOne, setMessagePartOne] = useState("");
  const [messagePartTwo, setMessagePartTwo] = useState("");
  const [gameType, setGameType] = useState("");
  const [showGameSelectionButtons, setShowGameSelectionButtons] =
    useState(true);
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const [showNumber, setShowNumber] = useState(false);
  const [showAnswerButtons, setShowAnswerButtons] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [showStartButton, setShowStartButton] = useState(false);
  const [startButtonContent, setStartButtonContent] = useState("Start");
  const [showResetButton, setShowResetButton] = useState(false);

  useEffect(() => checkAnswer(), [submittedAnswer]);

  const gameSelection = (e) => {
    let gameType = e.target.value;
    setGameType(gameType);

    setShowGameSelectionButtons(false);
    setMessagePartOne("Click the Start button to begin.");
    setShowNumber(true);
    setShowStartButton(true);
    setShowResetButton(true);
  };

  const generateNumber = () => {
    if (gameType === "normal") {
      let number = displayedNumber + 1;
      setDisplayedNumber(number);
      setMessagePartOne("Click one of the Answer buttons below.");
      setMessagePartTwo("");
    } else if (gameType === "random") {
      let number = Math.floor(Math.random() * 100 + 1);
      setDisplayedNumber(number);
      setMessagePartOne("Click one of the Answer buttons below.");
      setMessagePartTwo("");
    }
  };

  const submitAnswer = (e) => {
    let submittedAnswer = e.target.value;
    setSubmittedAnswer(submittedAnswer);
  };

  const checkAnswerHelper = () => {
    setMessagePartTwo(`Click "Next Number" to go again!`);
    setShowStartButton(true);
    setShowAnswerButtons(false);
    setSubmittedAnswer("");
  };

  const checkAnswer = () => {
    if (submittedAnswer === "none") {
      if (displayedNumber % 3 !== 0 && displayedNumber % 5 !== 0) {
        setMessagePartOne(
          `Correct! The number ${displayedNumber} can't be equally divided by 3 or 5!`
        );
        checkAnswerHelper();
      } else {
        setMessagePartOne(`Sorry, try that one again!`);
      }
    } else if (submittedAnswer === "fizz") {
      if (displayedNumber % 3 === 0 && displayedNumber % 5 !== 0) {
        setMessagePartOne(
          `Correct! The number ${displayedNumber} can be equally divided by 3, but not 5!`
        );
        checkAnswerHelper();
      } else {
        setMessagePartOne(`Sorry, try that one again!`);
      }
    } else if (submittedAnswer === "buzz") {
      if (displayedNumber % 3 !== 0 && displayedNumber % 5 === 0) {
        setMessagePartOne(
          `Correct! The number ${displayedNumber} can be equally divided by 5, but not 3!`
        );
        checkAnswerHelper();
      } else {
        setMessagePartOne(`Sorry, try that one again!`);
      }
    } else if (submittedAnswer === "fizz_buzz") {
      if (displayedNumber % 3 === 0 && displayedNumber % 5 === 0) {
        setMessagePartOne(
          `Correct! The number ${displayedNumber} can be equally divided by 3 and 5!`
        );
        checkAnswerHelper();
      } else {
        setMessagePartOne(`Sorry, try that one again!`);
      }
    }
  };

  const startGame = () => {
    setStartButtonContent("Next Number");
    setShowStartButton(false);
    setShowAnswerButtons(true);
    // generate a number!
    generateNumber();
  };

  const reset = () => {
    setGameType("");
    setShowGameSelectionButtons(true);
    setMessagePartOne("");
    setMessagePartTwo("");
    setShowNumber(false);
    setDisplayedNumber(0);
    setShowStartButton(false);
    setShowResetButton(false);
    setShowAnswerButtons(false);
    setStartButtonContent("Start");
    setSubmittedAnswer("");
  };
  return (
    <>
      <Messages messageOne={messagePartOne} messageTwo={messagePartTwo} />
      <GameSelection
        showSelection={showGameSelectionButtons}
        gameSelection={gameSelection}
      />
      <NumberDisplay
        showNumber={showNumber}
        displayedNumber={displayedNumber}
      />
      <AnswerSubmitButtons
        showAnswerButtons={showAnswerButtons}
        submitAnswer={submitAnswer}
      />
      <StartReset
        content={startButtonContent}
        showStartButton={showStartButton}
        startGame={startGame}
        showResetButton={showResetButton}
        reset={reset}
      />
    </>
  );
};

export default GameCont;
