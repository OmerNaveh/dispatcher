import * as React from "react";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { colors } from "../../../strings/colors";
import { headerStrings } from "../../../strings/strings";

export default function InputWithIcon() {
  return (
    <Input
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
