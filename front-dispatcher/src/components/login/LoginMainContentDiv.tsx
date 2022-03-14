import React from "react";
import { Container } from "../UI/Container/Container";
import LoginBtn from "./LoginBtn";
import LoginText from "./LoginText";

import CustomDivider from "../UI/Divider/CustomDivider";
import { loginString } from "../../strings/strings";

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
