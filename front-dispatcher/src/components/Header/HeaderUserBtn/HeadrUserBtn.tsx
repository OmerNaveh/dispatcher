import React, { Fragment, useState } from "react";
import { headerStrings } from "../../../strings/headerString";
import LogoutBtn from "../../login/LogoutBtn";
import { StyledHeaderBtn } from "./style";
interface UserBtnProps {
  userInitials: string;
}
export default function HeadrUserBtn({ userInitials }: UserBtnProps) {
  const [clicked, setClicked] = useState(false);
  return (
    <Fragment>
      <StyledHeaderBtn onClick={() => setClicked((prev) => !prev)}>
        {userInitials}
      </StyledHeaderBtn>
      {clicked && <LogoutBtn />}
    </Fragment>
  );
}
