import React from "react";
import ExitSVG from "../ExitSvg/style";

import { CustomSelect, StyledOption } from "./Style";
import { StyledDropDownDiv } from "./styled";

interface dropDownProps {
  options: string[];
  placeHolder?: string;
}

const DropDown = ({ options, placeHolder }: dropDownProps) => {
  const [selectFilterValue, setSelectFilterValue] =
    React.useState<string | undefined | null>(placeHolder);

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
        value={selectFilterValue}
        onChange={setSelectFilterValue}
        defaultValue={placeHolder}
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
