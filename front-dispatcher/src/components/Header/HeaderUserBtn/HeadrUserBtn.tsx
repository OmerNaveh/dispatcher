import React, { Fragment, useState } from "react";
import LogoutBtn from "../../login/LogoutBtn";
import { StyledHeaderBtn } from "./style";
interface UserBtnProps {
  userInitials: string;
}
export default function HeadrUserBtn({ userInitials }: UserBtnProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Fragment>
      <StyledHeaderBtn onClick={(e) => setClicked((prev) => !prev)}>
        {userInitials}
      </StyledHeaderBtn>
      {clicked && <LogoutBtn />}
    </Fragment>
  );
}
