import React, { useEffect, useRef, useState } from "react";

import InputWithIcon from "./InputWithIcon/InputWithIcon";

import { Divider } from "@mui/material";
import { filterActionsStrings, searchBarStrings } from "../../strings/strings";
import {
  StyledBackIcon,
  StyledMobileSearchDiv,
  StyledSearchBarDiv,
} from "./style";
import DropDown from "../../components/DropDown/DropDown";
import { useAppSelector } from "../../store";

interface searchbarProps {
  fullScreen?: boolean;
  mobileBackFC?: () => void;
}
const SearchBar = ({ fullScreen, mobileBackFC }: searchbarProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const searchDivRef = useRef<HTMLDivElement>(null);
  const filterState = useAppSelector((state) => state.filters);
  const { endpoint } = filterState;
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        searchDivRef.current &&
        !searchDivRef.current.contains(event.target as Node)
      ) {
        setFocused(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  if (fullScreen)
    return (
      <StyledMobileSearchDiv>
        <StyledBackIcon onClick={mobileBackFC} />
        <InputWithIcon
          mobile={true}
          setFocused={setFocused}
          focused={focused}
        />
      </StyledMobileSearchDiv>
    );
  return (
    <StyledSearchBarDiv focused={focused} ref={searchDivRef}>
      <InputWithIcon setFocused={setFocused} focused={focused} />
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
