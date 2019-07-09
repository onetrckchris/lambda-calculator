import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';
import { ButtonsContainer } from '../SpecialButtons/Specials';

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [calcOperators, setCalcOperators] = useState(operators);

  return (
    <ButtonsContainer>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calcOperators.map(operator => 
          <OperatorButton key={operator.char} operator={operator.char} operation={props.operation} />
        )}
    </ButtonsContainer>
  );
};

export default Operators;