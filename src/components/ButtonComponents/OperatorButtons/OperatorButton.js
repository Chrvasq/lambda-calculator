import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button
        className="operator-button"
        onClick={event => props.handleClick(event.target.value)}
        value={props.value}
      >
        {" "}
        {props.buttonData}{" "}
      </button>
    </>
  );
};

export default OperatorButton;
