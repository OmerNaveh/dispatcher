import React from "react";

import InputWithIcon from "./InputWithIcon/InputWithIcon";
import DropDown from "../UI/DropDown/DropDown";
import { Divider } from "@mui/material";
import { searchBarStrings } from "../../strings/strings";
import { StyledSearchBarDiv } from "./style";

const SearchBar = () => {
  return (
    <StyledSearchBarDiv>
      <InputWithIcon />
      <Divider orientation="vertical" variant="middle" flexItem />
      <DropDown
        options={searchBarStrings.searchDropDownOptions}
        placeHolder={searchBarStrings.searchDropDownOptions[0]}
      />
    </StyledSearchBarDiv>
  );
};

export default SearchBar;
