import React from "react";
import { useAppDispatch } from "../../store";
import {
  filterActions,
  filterActionsStringTypes,
} from "../../store/slicers/filtersSlice";
import { CustomSelect, StyledOption } from "./Style";
import { PersonalStyledOption, StyledDropDownDiv } from "./styled";

interface dropDownProps {
  options: string[];
  placeHolder?: string;
  searchbar?: boolean;
  shouldBeDisabled?: boolean;
  reduxActionType?: filterActionsStringTypes;
}

const DropDown = ({
  options,
  placeHolder,
  searchbar,
  reduxActionType,
  shouldBeDisabled,
}: dropDownProps) => {
  const [selectFilterValue, setSelectFilterValue] =
    React.useState<string | undefined | null>(placeHolder);
  const allOptions = () => {
    return options.map((optionString) => (
      <StyledOption key={optionString} value={optionString}>
        {optionString}
      </StyledOption>
    ));
  };
  const dispatch = useAppDispatch();
  const onChangeFC = (newValue: string | undefined | null) => {
    if (reduxActionType && newValue) {
      dispatch(filterActions[reduxActionType](newValue));
    }
    setSelectFilterValue(newValue);
  };
  return (
    <StyledDropDownDiv searchbar={searchbar} isDisabled={shouldBeDisabled}>
      <CustomSelect
        disabled={shouldBeDisabled}
        value={selectFilterValue}
        onChange={onChangeFC}
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
