import React, { useState } from "react";

import InputWithIcon from "./InputWithIcon/InputWithIcon";

import { Divider } from "@mui/material";
import { searchBarStrings } from "../../strings/strings";
import {
  StyledBackIcon,
  StyledMobileSearchDiv,
  StyledSearchBarDiv,
} from "./style";
import DropDown from "../../components/DropDown/DropDown";

interface searchbarProps {
  fullScreen?: boolean;
  mobileBackFC?: () => void;
}
const SearchBar = ({ fullScreen, mobileBackFC }: searchbarProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  if (fullScreen)
    return (
      <StyledMobileSearchDiv>
        <StyledBackIcon onClick={mobileBackFC} />
        <InputWithIcon mobile={true} />
      </StyledMobileSearchDiv>
    );
  return (
    <StyledSearchBarDiv focused={focused}>
      <InputWithIcon onFocusFC={() => setFocused(!focused)} />
      <Divider orientation="vertical" flexItem />
      <DropDown
        options={searchBarStrings.searchDropDownOptions}
        placeHolder={searchBarStrings.searchDropDownOptions[0]}
      />
    </StyledSearchBarDiv>
  );
};

export default SearchBar;
