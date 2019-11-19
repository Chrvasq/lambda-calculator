import React from "react";

const NumberButton = props => {
  return (
    <>
      <button
        className="number-button"
        onClick={event => props.handleClick(event.target.value)}
        value={props.value}
      >
        {props.buttonData}
      </button>
    </>
  );
};

export default NumberButton;
