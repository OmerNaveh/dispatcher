import React from "react";
import ExitSVG from "../ExitSvg/style";

import { CustomSelect, StyledOption } from "./Style";
import { StyledDropDownDiv } from "./styled";

interface dropDownProps {
  options: string[];
  placeHolder?: string;
}

const DropDown = ({ options, placeHolder }: dropDownProps) => {
  const [value, setValue] = React.useState<string | null>(placeHolder || "");

  const allOptions = () => {
    return options.map((optionString) => (
      <StyledOption key={optionString} value={optionString}>
        {optionString}
      </StyledOption>
    ));
  };

  return (
    <StyledDropDownDiv>
      <CustomSelect
        value={value}
        onChange={setValue}
        defaultValue={placeHolder || ""}
      >
        {placeHolder && (
          <StyledOption disabled value={placeHolder}>
            {placeHolder}
          </StyledOption>
        )}
        {allOptions()}
      </CustomSelect>
    </StyledDropDownDiv>
  );
};

export default DropDown;
