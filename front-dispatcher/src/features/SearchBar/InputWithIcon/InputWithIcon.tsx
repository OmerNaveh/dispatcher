import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { apiStrings, headerStrings } from "../../../strings/strings";
import { StyledExitIcon, StyledInputWithIcon } from "../style";
import HistoryDiv from "../HistoryDiv/HistoryDiv";

interface props {
  onFocusFC?: () => void;
  mobile?: boolean;
  focused?: boolean;
}
export default function InputWithIcon({ onFocusFC, mobile, focused }: props) {
  const [inputValue, setInputValue] = useState<string>("");
  const clearValue = () => {
    inputValue && setInputValue("");
  };
  return (
    <>
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

      {focused && <HistoryDiv data={apiStrings.Catagory} />}
    </>
  );
}
