import React, {useState} from "react";
import Messages from "./Messages";
import GameSelection from "./GameSelection";
import NumberDisplay from "./NumberDisplay";
import AnswerSubmitButtons from "./AnswerSubmitButtons";
import StartReset from "./StartReset";

const GameCont = () => {

const [messagePartOne, setMessagePartOne] = useState("Message part One!");
const [messagePartTwo, setMessagePartTwo] = useState("Message part Two!");
const [displayedNumber, setDisplayedNumber] = useState(2);
  return (
    <>
      <Messages messageOne={messagePartOne} messageTwo={messagePartTwo}/>
      <GameSelection />
      <NumberDisplay displayedNumber={displayedNumber}/>
      <AnswerSubmitButtons />
      <StartReset />
    </>
  );
};

export default GameCont;
