import React from "react";
import DropDown from "../../../../components/DropDown/DropDown";
import { chooseCorrectActionType } from "../../../../helpers/actionTypeSelector";
import { useAppSelector } from "../../../../store";
import { filterActionsStringTypes } from "../../../../store/slicers/filtersSlice";

import {
  apiStrings,
  filterActionsStrings,
  ReduxString,
  searchBarStrings,
} from "../../../../strings/strings";
import DateInput from "../DateInput/DateInput";

import { DropDownsContainer } from "./style";
import { shouldBeDisabledFunc } from "./utils/shouldBeDiabledFunc";

interface props {
  searchMainQuery: string;
}

const DropDowns = ({ searchMainQuery }: props) => {
  const filterState = useAppSelector((state) => state.filters);
  const createDropDowns = () => {
    if (searchMainQuery === searchBarStrings.searchDropDownOptions[0]) {
      return apiStrings[searchMainQuery].map((cat) => {
        if (cat && apiStrings[cat]) {
          return (
            <DropDown
              key={cat}
              shouldBeDisabled={shouldBeDisabledFunc(cat, filterState)}
              options={apiStrings[cat]}
              placeHolder={cat}
              reduxActionType={chooseCorrectActionType(cat, searchMainQuery)}
            />
          );
        }
      });
    } else {
      return apiStrings.Everything.map((cat) => {
        //date catagory case
        if (cat === apiStrings.Everything[1]) {
          return <DateInput />;
        }
        if (cat && apiStrings[cat]) {
          return (
            <DropDown
              key={cat}
              options={apiStrings[cat]}
              placeHolder={cat}
              reduxActionType={chooseCorrectActionType(cat, searchMainQuery)}
            />
          );
        }
      });
    }
  };

  return <DropDownsContainer>{createDropDowns()}</DropDownsContainer>;
};

export default DropDowns;
