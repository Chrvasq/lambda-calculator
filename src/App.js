import React from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [currentNumber, setCurrentNumber] = React.useState("0");
  const [operatorFlag, setOperatorFlag] = React.useState(false);
  const [decimalFlag, setDecimalFlag] = React.useState(false);

  const handleClick = buttonValue => {
    switch (buttonValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        if (currentNumber !== "0") {
          setCurrentNumber(currentNumber + buttonValue);
          setOperatorFlag(false);
        } else {
          setCurrentNumber(buttonValue);
        }
        break;
      }
      case "*":
      case "+":
      case "-":
      case "/": {
        if (!operatorFlag) {
          setCurrentNumber(currentNumber + buttonValue);
          setOperatorFlag(buttonValue);
        } else {
          const newNumber = currentNumber.slice(0, currentNumber.length - 1);
          setCurrentNumber(newNumber + buttonValue);
        }
        break;
      }
      case "C": {
        setCurrentNumber("0");
        break;
      }
      case "=": {
        const result = currentNumber.includes(".")
          ? eval(currentNumber).toFixed(2)
          : eval(currentNumber);
        setCurrentNumber(result);
        break;
      }
      case ".": {
        if (!decimalFlag) {
          setCurrentNumber(currentNumber + ".");
          setDecimalFlag(true);
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display currentNumber={currentNumber} />
        <div className="calculator">
          <section className="specials-numbers">
            <Specials handleClick={handleClick} />
            <Numbers handleClick={handleClick} />
          </section>
          <Operators handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
