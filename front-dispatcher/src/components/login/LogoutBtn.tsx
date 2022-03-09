import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { headerStrings } from "../../strings/headerString";
export default function LogoutBtn() {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      {headerStrings.sign_out}
    </button>
  );
}
