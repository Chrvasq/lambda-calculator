import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className='special-button'> {props.buttonData} </button>
    </>
  );
};

export default SpecialButton;

