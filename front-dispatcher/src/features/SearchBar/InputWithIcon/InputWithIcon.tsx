import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { headerStrings } from "../../../strings/strings";
import { StyledExitIcon, StyledInputWithIcon } from "../style";

interface props {
  onFocusFC?: () => void;
  mobile?: boolean;
}
export default function InputWithIcon({ onFocusFC, mobile }: props) {
  const [inputValue, setInputValue] = useState<string>("");
  const clearValue = () => {
    inputValue && setInputValue("");
  };
  return (
    <StyledInputWithIcon
      mobile={mobile}
      onFocus={onFocusFC}
      onBlur={onFocusFC}
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
      placeholder={headerStrings.Search}
      disableUnderline={true}
      endAdornment={
        <InputAdornment position={!mobile ? "start" : "end"}>
          {mobile && inputValue && <StyledExitIcon onClick={clearValue} />}
        </InputAdornment>
      }
      startAdornment={
        <InputAdornment position={!mobile ? "start" : "end"}>
          {!mobile && <SearchIcon />}
        </InputAdornment>
      }
    />
  );
}
