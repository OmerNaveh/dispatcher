import React from "react";

import { CustomSelect, StyledOption } from "./Style";

export default function DropDown(props: { options: string[] }) {
  const allOptions = () => {
    return props.options.map((optionString) => (
      <StyledOption key={optionString} value={optionString}>
        {optionString}
      </StyledOption>
    ));
  };

  return <CustomSelect>{allOptions()}</CustomSelect>;
}
