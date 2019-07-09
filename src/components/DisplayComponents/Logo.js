import React from "react";
import styled from 'styled-components';

import logo from "../../Img/Lambda_Logo_white.png";

const LambdaLogo = styled.img`
  width: 100px;
`;

const Logo = () => {
  return (
    <div className="logo-container">
      <LambdaLogo className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
