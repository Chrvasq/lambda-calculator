import React from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = props => {
  const [specialState, setSpecialState] = React.useState(specials);

  const buttons = specialState.map((buttonData, index) => (
    <SpecialButton
      key={index}
      buttonData={buttonData}
      value={buttonData}
      handleClick={props.handleClick}
    />
  ));

  return <div className="special-container">{buttons}</div>;
};

export default Specials;
