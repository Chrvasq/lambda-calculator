import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <button className='number-button'>{props.buttonData}</button>
    </>
  );
};

export default NumberButton;