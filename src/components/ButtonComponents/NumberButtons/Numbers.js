import React, { useState } from "react";

// Import any components needed
import NumberButton from './NumberButton';
import { ButtonsContainer } from '../SpecialButtons/Specials';

// Import your array data to from the provided data file
import { numbers } from '../../../data';

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [calcNumbers, setCalcNumbers] = useState(numbers);

  return (
    <ButtonsContainer>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calcNumbers.map(number => 
         <NumberButton key={number} number={number} record={props.record} />
       )}
    </ButtonsContainer>
  );
};

export default Numbers;
