import React from "react";
import { numbers } from "../../../data";
import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState, setNumberState] = React.useState(numbers);

  const buttons = numberState.map((buttonData, index) => (
    <NumberButton key={index} buttonData={buttonData} />
  ))

  return (
    <div className='number-container'>
       {buttons}
    </div>
  );
};

export default Numbers;
