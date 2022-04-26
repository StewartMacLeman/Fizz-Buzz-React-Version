import React from "react";

const Messages = (props) => {
    return (
        <>
         <p className="userMessage">{props.messageOne}</p>
         <p className="userMessage">{props.messageTwo}</p>
        </>
    )
}

export default Messages;