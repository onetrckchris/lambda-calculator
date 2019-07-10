import React from "react";
import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #245593;
  color: white;
  font-size: 1.5rem;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  outline: none;
  box-shadow: 0px 3px 0px #292E4F;

  ${props =>
    props.zero && css`
      width: 145px;
      border-radius: 60px;
    `}

  ${props =>
    props.number && css`
      background-color: #194378;
    `}

  ${props =>
    props.operator && css`
      background-color: #247192;
    `} 
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
