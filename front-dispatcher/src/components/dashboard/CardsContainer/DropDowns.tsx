import React from "react";
import { apiStrings } from "../../../strings/apiStrings";
import { searchBarStrings } from "../../../strings/searchBarStrings";
import { Container } from "../../UI/Container/Container";
import DropDown from "../../UI/DropDown/DropDown";

interface props {
  searchMainQuery: string;
}
const DropDowns = ({ searchMainQuery }: props) => {
  const createDropDowns = () => {
    if (searchMainQuery === searchBarStrings.searchDropDownOptions[0]) {
      return apiStrings.TopHeadlinesOptions.map((cat) => {
        if (cat === "Sources") {
          return <DropDown options={[]} placeHolder={cat}></DropDown>;
        }
        if (cat && apiStrings[cat]) {
          return (
            <DropDown options={apiStrings[cat]} placeHolder={cat}></DropDown>
          );
        }
      });
    } else {
      return apiStrings.EverythingOptions.map((cat) => {
        if (cat === "Dates") {
          return <DropDown options={[]} placeHolder={cat}></DropDown>;
        }
        if (cat === "Sources") {
          return <DropDown options={[]} placeHolder={cat}></DropDown>;
        }
        if (cat && apiStrings[cat]) {
          return (
            <DropDown options={apiStrings[cat]} placeHolder={cat}></DropDown>
          );
        }
      });
    }
  };

  return <Container className="flex">{createDropDowns()}</Container>;
};

export default DropDowns;
