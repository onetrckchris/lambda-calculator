import React, { useState } from "react";
import styled from 'styled-components';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Display from './components/DisplayComponents/Display';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

const Calculator = styled.div`
  width: 350px;
  height: 560px;
  background-color: #A81E37;
  padding: 30px;
  border-radius: 10px;
`;

const ButtonsSection = styled.div`
  display: flex;
`;

const LeftOfOperators = styled.div`
`;

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [result, setResult] = useState(0)

  const record = (param) => {
    if(result === 0) {
      setResult(param);
    } else if(param === 'x') {
      param = '*';
      setResult(result + param);
    } else {
      setResult(result + param);
    }
  }

  const clear = (specialButton) => {
    if(specialButton === 'C') {
      setResult(0);
    } else {
      return;
    }
  }

  const operation = (operator) => {
    if(operator === '=') {
      console.log(result.split(''));
      setResult(result.split(''));
      setResult(eval(result));
    } else {
      record(operator);
    }
  }

  return (
    <Calculator>
      <Logo />
      <Display result={result} />
      <ButtonsSection>
        <LeftOfOperators>
          <Specials clear={clear} />
          <Numbers record={record} />
        </LeftOfOperators>
        <Operators operation={operation} />
      </ButtonsSection>
    </Calculator>
  );
}

export default App;
