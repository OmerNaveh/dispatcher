import React from "react";
import { CustomSelect, StyledOption } from "./Style";
import { PersonalStyledOption, StyledDropDownDiv } from "./styled";

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
          <PersonalStyledOption
            disabled
            value={placeHolder}
            isPlaceHolder={true}
          >
            {placeHolder}
          </PersonalStyledOption>
        )}
        {allOptions()}
      </CustomSelect>
    </StyledDropDownDiv>
  );
};

export default DropDown;
