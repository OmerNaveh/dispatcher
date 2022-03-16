import React from "react";

import { Container } from "../../components/UI/Container/Container";
import LogoSvg from "../../components/UI/LogoSvg/style";
import LoginMainContentDiv from "./components/LoginInMainContent/LoginMainContentDiv";
import { LoginSideLogoDiv } from "./components/LoginInMainContent/style";

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
