import React, {useState} from "react";
import Messages from "./Messages";
import GameSelection from "./GameSelection";
import NumberDisplay from "./NumberDisplay";
import AnswerSubmitButtons from "./AnswerSubmitButtons";
import StartReset from "./StartReset";

const GameCont = () => {

const [messagePartOne, setMessagePartOne] = useState("");
const [messagePartTwo, setMessagePartTwo] = useState("");
const [gameType, setGameType] = useState("");
const [showGameSelectionButtons, setShowGameSelectionButtons] = useState(true);
const [displayedNumber, setDisplayedNumber] = useState(2);
const [showNumber, setShowNumber] = useState(false);
const [showAnswerButtons, setShowAnswerButtons] = useState(false);
const [submittedAnswer, setSubmittedAnswer] = useState("");
const [showStartButton, setShowStartButton] = useState(false);
const [startButtonContent, setStartButtonContent] = useState("Start");
const [showResetButton, setShowResetButton] = useState(false);

// function selectGame(e){
//     let gameValue = e.target.value;
//     gameType = gameValue;
  
//     gameSelectionDiv.classList.add("hide");
//     messageDisplay.classList.remove("hide");
//     messageDisplay.textContent = "Click the Start button to begin.";
//     numberDisplay.classList.remove("hide");
//     onScreenNumber.textContent = "_";
  
//     playButton.classList.remove("hide");
//     resetButton.classList.remove("hide");
//   }
const gameSelection = (e) => {
    let gameType = e.target.value;
    // console.log(gameType);
    setShowGameSelectionButtons(false);
    setMessagePartOne("Click the Start button to begin.");
    setShowNumber(true);
    setDisplayedNumber("--");
    setShowStartButton(true);
    setShowResetButton(true);
}

const reset = () => {
    setShowGameSelectionButtons(true);
    setMessagePartOne("");
    setMessagePartTwo("");
    setShowNumber(false);
    setDisplayedNumber("");
    setShowStartButton(false);
    setShowResetButton(false);
}
  return (
    <>
      <Messages messageOne={messagePartOne} messageTwo={messagePartTwo}/>
      <GameSelection showSelection={showGameSelectionButtons} gameSelection={gameSelection}/>
      <NumberDisplay showNumber={showNumber} displayedNumber={displayedNumber}/>
      <AnswerSubmitButtons showAnswerButtons={showAnswerButtons}/>
      <StartReset content={startButtonContent} showStartButton={showStartButton} showResetButton={showResetButton} reset={reset} />
    </>
  );
};

export default GameCont;
