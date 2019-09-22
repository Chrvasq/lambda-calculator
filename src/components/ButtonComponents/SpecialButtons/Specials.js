import React from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialState, setSpecialState] = React.useState(specials);

  const buttons = specialState.map((buttonData, index) => (
    <SpecialButton key={index} buttonData={buttonData} />
  ))

  return (
    <div className='special-container'>
       {buttons}
    </div>
  );
};

export default Specials;
