import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { LogoutBtnStyled } from "./LogoutBtnStyle";
import { headerStrings } from "../../strings/strings";

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
    <LogoutBtnStyled
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      {headerStrings.SignOut}
    </LogoutBtnStyled>
  );
};

export default LogoutBtn;
