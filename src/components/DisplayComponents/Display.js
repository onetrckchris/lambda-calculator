import React from "react";
import styled from 'styled-components';

const ResultDisplay = styled.div`
  background-color: #323335;
  height: 80px;
  margin: 15px 0px 20px 0px;
  border-radius: 60px;
  padding: 10px 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Result = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 0;
`;

const Display = props => {
  return (
    <ResultDisplay>
      {/* Display any props data here */}
      <Result>{props.result}</Result>
    </ResultDisplay>
  );
};

export default Display;
