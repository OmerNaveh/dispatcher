import React from "react";

import LoginMainContentDiv from "../../components/login/LoginMainContentDiv";
import LoginSideLogoDiv from "../../components/login/LoginSideLogoDiv";
import { Container } from "../../components/UI/Container/Container";
import LogoSvg from "../../components/UI/LogoSvg/LogoSvg";

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
