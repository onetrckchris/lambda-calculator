import React from "react";

import { StyledButton } from '../SpecialButtons/SpecialButton';

const OperatorButton = props => {
  return (
    <StyledButton operator onClick={() => props.operation(props.operator)}>
      {props.operator}
    </StyledButton>
  );
};

export default OperatorButton;
