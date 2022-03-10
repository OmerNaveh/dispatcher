import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import ArrowSvg from "../UI/ArrowSvg/ArrowSvg";
import { cardString } from "../../strings/cardStrings";

export default function LoginBtn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <PrimaryButton onClick={() => loginWithRedirect()}>
      {cardString.CONTINUE} <ArrowSvg />
    </PrimaryButton>
  );
}
