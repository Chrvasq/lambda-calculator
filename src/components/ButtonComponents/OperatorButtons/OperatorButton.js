import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className='operator-button'> {props.buttonData} </button>
    </>
  );
};

export default OperatorButton;
