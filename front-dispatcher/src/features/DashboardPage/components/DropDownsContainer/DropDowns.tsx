import React from "react";
import DropDown from "../../../../components/DropDown/DropDown";
import { chooseCorrectActionType } from "../../../../helpers/actionTypeSelector";
import { useAppSelector } from "../../../../store";
import { apiStrings, searchBarStrings } from "../../../../strings/strings";
import DateInput from "../DateInput/DateInput";

import { DropDownsContainer } from "./style";

interface props {
  searchMainQuery: string;
}

const DropDowns = ({ searchMainQuery }: props) => {
  const filterState = useAppSelector((state) => state.filters);
  const createDropDowns = () => {
    if (searchMainQuery === searchBarStrings.searchDropDownOptions[0]) {
      return apiStrings[searchMainQuery].map((category) => {
        if (category && apiStrings[category]) {
          return (
            <DropDown
              key={category + filterState.endpoint}
              options={apiStrings[category]}
              placeHolder={category}
              reduxActionType={chooseCorrectActionType(
                category,
                searchMainQuery
              )}
            />
          );
        }
      });
    } else {
      return apiStrings.Everything.map((category) => {
        //date category case
        if (category === apiStrings.Everything[1]) {
          return <DateInput />;
        }
        if (category && apiStrings[category]) {
          return (
            <DropDown
              key={category}
              options={apiStrings[category]}
              placeHolder={category}
              reduxActionType={chooseCorrectActionType(
                category,
                searchMainQuery
              )}
            />
          );
        }
      });
    }
  };

  return <DropDownsContainer>{createDropDowns()}</DropDownsContainer>;
};

export default DropDowns;
