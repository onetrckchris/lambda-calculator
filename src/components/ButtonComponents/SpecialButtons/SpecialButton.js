import React from "react";
import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #245593;
  color: white;
  font-size: 1.5rem;
  width: 55px;
  height: 55px;
  outline: none;
  box-shadow: 0px 3px 0px #292E4F;
`;

const SpecialButton = props => {
  return (
    <StyledButton onClick={() => props.clear(props.special)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </StyledButton>
  );
};

export default SpecialButton;
