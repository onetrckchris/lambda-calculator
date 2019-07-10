import React, { useState } from "react";
import styled, { css } from 'styled-components';

import SpecialButton from './SpecialButton';

import { specials } from '../../../data';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 10px;
`;

const Specials = props => {
  const [calcSpecials, setCalcSpecials] = useState(specials);

  return (
    <ButtonsContainer>
      {calcSpecials.map(special => 
        <SpecialButton key={special} special={special} clear={props.clear} />
      )}
    </ButtonsContainer>
  );
};

export default Specials;
