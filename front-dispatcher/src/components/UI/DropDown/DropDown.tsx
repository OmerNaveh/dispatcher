import React from "react";
import ExitSVG from "../ExitSvg/ExitSVG";

import { CustomSelect, StyledOption } from "./Style";

interface dropDownProps {
  options: string[];
  placeHolder?: string;

  history?: boolean;
  deleteHistoryFunc?: () => {};
}

const DropDown = ({
  options,
  placeHolder,
  history,

  deleteHistoryFunc,
}: dropDownProps) => {
  const [value, setValue] = React.useState<string | null>(placeHolder || "");

  const allOptions = () => {
    return options.map((optionString) => (
      <StyledOption key={optionString} value={optionString}>
        {optionString}
        {history && value !== optionString && (
          <ExitSVG onClick={deleteHistoryFunc} />
        )}
      </StyledOption>
    ));
  };

  return (
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
  );
};

export default DropDown;
