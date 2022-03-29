import React, { useState } from "react";

import InputWithIcon from "./InputWithIcon/InputWithIcon";

import { Divider } from "@mui/material";
import { filterActionsStrings, searchBarStrings } from "../../strings/strings";
import {
  StyledBackIcon,
  StyledMobileSearchDiv,
  StyledSearchBarDiv,
} from "./style";
import DropDown from "../../components/DropDown/DropDown";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface searchbarProps {
  fullScreen?: boolean;
  mobileBackFC?: () => void;
}
const SearchBar = ({ fullScreen, mobileBackFC }: searchbarProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const filterState = useSelector((state: RootState) => state.filters);
  const { endpoint } = filterState;
  if (fullScreen)
    return (
      <StyledMobileSearchDiv>
        <StyledBackIcon onClick={mobileBackFC} />
        <InputWithIcon
          mobile={true}
          onFocusFC={() => setFocused(!focused)}
          focused={focused}
        />
      </StyledMobileSearchDiv>
    );
  return (
    <StyledSearchBarDiv focused={focused}>
      <InputWithIcon onFocusFC={() => setFocused(!focused)} focused={focused} />
      <Divider orientation="vertical" flexItem />
      <DropDown
        reduxActionType={filterActionsStrings[0]}
        searchbar={true}
        options={searchBarStrings.searchDropDownOptions}
        placeHolder={endpoint}
      />
    </StyledSearchBarDiv>
  );
};

export default SearchBar;
