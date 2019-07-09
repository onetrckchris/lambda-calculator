import React from "react";

import { StyledButton } from '../SpecialButtons/SpecialButton';

const NumberButton = props => {
  return (
    <>
    { props.number === '0' ? 
    <StyledButton number zero onClick={() => props.record(props.number)}>
    {props.number}
    </StyledButton> :
    <StyledButton number onClick={() => props.record(props.number)}>
      {props.number}
    </StyledButton>
    }
    </>
  );
};

export default NumberButton;
