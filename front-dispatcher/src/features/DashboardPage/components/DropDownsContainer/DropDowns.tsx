import React from "react";
import DropDown from "../../../../components/DropDown/DropDown";

import { apiStrings, searchBarStrings } from "../../../../strings/strings";

import { DropDownsContainer } from "./style";

interface props {
  searchMainQuery: string;
}
const DropDowns = ({ searchMainQuery }: props) => {
  const createDropDowns = () => {
    if (searchMainQuery === searchBarStrings.searchDropDownOptions[0]) {
      return apiStrings[searchMainQuery].map((cat) => {
        if (cat && apiStrings[cat]) {
          return (
            <DropDown key={cat} options={apiStrings[cat]} placeHolder={cat} />
          );
        }
      });
    } else {
      return apiStrings.Everything.map((cat) => {
        //date catagory case
        if (cat === apiStrings.Everything[1]) {
          return <DropDown key={cat} options={[]} placeHolder={cat} />;
        }
        if (cat && apiStrings[cat]) {
          return (
            <DropDown key={cat} options={apiStrings[cat]} placeHolder={cat} />
          );
        }
      });
    }
  };

  return <DropDownsContainer>{createDropDowns()}</DropDownsContainer>;
};

export default DropDowns;
