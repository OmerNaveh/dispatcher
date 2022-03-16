import React from "react";
import { Container } from "../../../../components/Container/Container";
import CustomDivider from "../../../../components/Divider/style";

import { loginString } from "../../../../strings/strings";
import LoginBtn from "../LogInBtn/LoginBtn";
import { LoginText } from "./style";

const LoginMainContentDiv = () => {
  return (
    <Container className="login">
      <Container className="flex column loginContent">
        <Container className="noPad">
          <LoginText className="title">{loginString.title}</LoginText>
          <LoginText>{loginString.desc}</LoginText>
        </Container>
        <Container className="noPadLower">
          <CustomDivider />
          <LoginBtn />
        </Container>
      </Container>
    </Container>
  );
};

export default LoginMainContentDiv;
