import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button
        className="special-button"
        onClick={event => props.handleClick(event.target.value)}
        value={props.value}
      >
        {" "}
        {props.buttonData}{" "}
      </button>
    </>
  );
};

export default SpecialButton;
