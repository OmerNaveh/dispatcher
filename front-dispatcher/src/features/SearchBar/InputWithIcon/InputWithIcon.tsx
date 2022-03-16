import * as React from "react";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { colors } from "../../../strings/colors";
import { headerStrings } from "../../../strings/strings";

interface props {
  onFocusFC?: () => void;
}
export default function InputWithIcon({ onFocusFC }: props) {
  return (
    <Input
      onFocus={onFocusFC}
      onBlur={onFocusFC}
      placeholder={headerStrings.Search}
      disableUnderline={true}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
