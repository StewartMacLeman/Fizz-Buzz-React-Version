import React from "react";

const NumberDisplay = (props) => {
    return (
        <p className="userMessage">Number: {props.displayedNumber}</p>
    )
}

export default NumberDisplay