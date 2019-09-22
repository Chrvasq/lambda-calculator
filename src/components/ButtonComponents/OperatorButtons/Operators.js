import React from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = React.useState(operators);

  const buttons = operatorState.map((buttonData, index) => (
    <OperatorButton key={index} buttonData={buttonData.value} />
  ))

  return (
    <div className='operator-container'>
       {buttons}
    </div>
  );
};

export default Operators;
