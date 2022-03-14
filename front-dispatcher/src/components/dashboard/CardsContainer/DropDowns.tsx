import React from "react";
import { apiStrings, searchBarStrings } from "../../../strings/strings";

import { Container } from "../../UI/Container/Container";
import DropDown from "../../UI/DropDown/DropDown";

interface props {
  searchMainQuery: string;
}
const DropDowns = ({ searchMainQuery }: props) => {
  const createDropDowns = () => {
    if (searchMainQuery === searchBarStrings.searchDropDownOptions[0]) {
      return apiStrings.TopHeadlinesOptions.map((cat) => {
        if (cat === apiStrings.TopHeadlinesOptions[2]) {
          return <DropDown key={cat} options={[]} placeHolder={cat}></DropDown>;
        }
        //sources catagory case
        if (cat && apiStrings[cat]) {
          return (
            <DropDown
              key={cat}
              options={apiStrings[cat]}
              placeHolder={cat}
            ></DropDown>
          );
        }
      });
    } else {
      return apiStrings.EverythingOptions.map((cat) => {
        //date catagory case
        if (cat === apiStrings.EverythingOptions[1]) {
          return <DropDown key={cat} options={[]} placeHolder={cat}></DropDown>;
        }
        //sources catagory case
        if (apiStrings.TopHeadlinesOptions[2]) {
          return <DropDown key={cat} options={[]} placeHolder={cat}></DropDown>;
        }
        if (cat && apiStrings[cat]) {
          return (
            <DropDown
              key={cat}
              options={apiStrings[cat]}
              placeHolder={cat}
            ></DropDown>
          );
        }
      });
    }
  };

  return <Container className="flex">{createDropDowns()}</Container>;
};

export default DropDowns;
