import React from "react";

import { StyledButton } from '../SpecialButtons/SpecialButton';

const NumberButton = props => {
  return (
    <StyledButton onClick={() => props.record(props.number)}>
      {props.number}
    </StyledButton>
  );
};

export default NumberButton;
