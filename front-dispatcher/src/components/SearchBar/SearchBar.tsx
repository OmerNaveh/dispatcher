import React from "react";
import { StyledSearchBarDiv } from "./SearchBarDiv/style";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import InputWithIcon from "./InputWithIcon/InputWithIcon";
import DropDown from "../UI/DropDown/DropDown";
import { Divider } from "@mui/material";
const SearchBar = () => {
  return (
    <StyledSearchBarDiv className="grid">
      <InputWithIcon />
      <Divider orientation="vertical" variant="middle" flexItem />
      <DropDown options={["1"]} />
    </StyledSearchBarDiv>
  );
};

export default SearchBar;
