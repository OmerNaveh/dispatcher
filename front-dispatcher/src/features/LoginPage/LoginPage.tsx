import React from "react";

import LoginMainContentDiv from "../../components/login/LoginInMainContent/LoginMainContentDiv";
import { LoginSideLogoDiv } from "../../components/login/LoginInMainContent/style";
import { Container } from "../../components/UI/Container/Container";
import LogoSvg from "../../components/UI/LogoSvg/style";

const LoginPage = () => {
  return (
    <Container className="flex fullScreen">
      <LoginSideLogoDiv>
        <LogoSvg />
      </LoginSideLogoDiv>
      <LoginMainContentDiv />
    </Container>
  );
};

export default LoginPage;
