import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { LogoutBtnStyled } from "./LogoutBtnStyle";
import { headerStrings, routeStrings } from "../../strings/strings";

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
    <LogoutBtnStyled
      onClick={() => logout({ returnTo: routeStrings.loginPath })}
    >
      {headerStrings.SignOut}
    </LogoutBtnStyled>
  );
};

export default LogoutBtn;
