import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import ArrowSvg from "../UI/ArrowSvg/ArrowSvg";
import { cardString } from "../../strings/strings";

const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <PrimaryButton className="login" onClick={() => loginWithRedirect()}>
      {cardString.Continue} <ArrowSvg />
    </PrimaryButton>
  );
};

export default LoginBtn;
