import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ArrowSvg from "../../../../components/ArrowSvg/style";
import { cardString } from "../../../../strings/strings";
import PrimaryButton from "../../../../components/PrimaryButton/style";

const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <PrimaryButton className="login" onClick={() => loginWithRedirect()}>
      {cardString.Continue} <ArrowSvg />
    </PrimaryButton>
  );
};

export default LoginBtn;
