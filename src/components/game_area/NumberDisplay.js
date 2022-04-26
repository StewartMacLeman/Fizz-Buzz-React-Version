import React from "react";

const NumberDisplay = (props) => {
    return (
        <p className={props.showNumber ? "userMessage" : "hide" }>Number: {props.displayedNumber}</p>
    )
}

export default NumberDisplay