import React from "react";
import { StyledSearchBarDiv } from "./SearchBarDiv/style";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import InputWithIcon from "./InputWithIcon/InputWithIcon";
import DropDown from "../UI/DropDown/DropDown";
import { Divider } from "@mui/material";
import { searchBarStrings } from "../../strings/searchBarStrings";
const SearchBar = () => {
  return (
    <StyledSearchBarDiv className="grid">
      <InputWithIcon />
      <Divider orientation="vertical" variant="middle" flexItem />
      <DropDown options={searchBarStrings.searchDropDownOptions} />
    </StyledSearchBarDiv>
  );
};

export default SearchBar;
