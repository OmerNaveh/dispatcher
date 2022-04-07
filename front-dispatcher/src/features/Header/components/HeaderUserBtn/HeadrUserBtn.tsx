import { useAuth0 } from "@auth0/auth0-react";
import React, { Fragment, useState } from "react";
import LogoutBtn from "../../../LoginPage/components/LogOutBtn/LogoutBtn";

import { StyledHeaderBtn } from "./style";
interface UserBtnProps {
  userInitials: string;
}

const HeadrUserBtn = ({ userInitials }: UserBtnProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { user } = useAuth0();

  let auth0UserInitials = "";
  if (user && user.given_name && user.family_name) {
    auth0UserInitials =
      user.given_name.slice(0, 1).toUpperCase() +
      user.family_name.slice(0, 1).toUpperCase();
  }
  return (
    <Fragment>
      <StyledHeaderBtn onClick={(e) => setClicked((prev) => !prev)}>
        {auth0UserInitials || userInitials}
      </StyledHeaderBtn>
      {clicked && <LogoutBtn />}
    </Fragment>
  );
};

export default HeadrUserBtn;
