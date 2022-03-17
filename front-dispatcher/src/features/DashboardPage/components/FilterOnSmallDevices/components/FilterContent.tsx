import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../../../assets/back.svg";
import PrimaryButton from "../../../../../components/PrimaryButton/style";
import { apiStrings, searchBarStrings } from "../../../../../strings/strings";
import {
  FilterBtnDiv,
  FilterDiv,
  FilterItemCardContainer,
  FilterItemsContainer,
  FilterItemText,
  FilterItemTitle,
} from "../style";

const FilterContent = () => {
  const [filterTitle, setFilterTitle] = useState<string>(
    searchBarStrings.filter
  );
  const cardContainers = () => {
    if (apiStrings[filterTitle]) {
      return apiStrings[filterTitle].map((title) => (
        <FilterItemCardContainer
          key={title}
          onClick={() => setFilterTitle(title)}
        >
          <FilterItemText>{title}</FilterItemText>
        </FilterItemCardContainer>
      ));
    }
    return (
      <>
        <FilterItemCardContainer
          onClick={() => setFilterTitle(searchBarStrings.searchIn)}
        >
          <FilterItemText>{searchBarStrings.searchIn}</FilterItemText>
          <FilterItemText>
            {/* will be replaced with state of search */}
            {searchBarStrings.searchDropDownOptions[0]}
          </FilterItemText>
        </FilterItemCardContainer>
        {}
      </>
    );
  };
  return (
    <FilterDiv>
      <FilterItemsContainer>
        <FilterItemTitle
          pointer={filterTitle !== searchBarStrings.filter}
          onClick={
            filterTitle !== searchBarStrings.filter
              ? () => {
                  setFilterTitle(searchBarStrings.filter);
                }
              : undefined
          }
        >
          {filterTitle !== searchBarStrings.filter && (
            <ArrowIcon style={{ marginRight: "1em" }} />
          )}
          {filterTitle}
        </FilterItemTitle>
        {cardContainers()}
      </FilterItemsContainer>
      <FilterBtnDiv>
        <PrimaryButton>{searchBarStrings.viewResults}</PrimaryButton>
      </FilterBtnDiv>
    </FilterDiv>
  );
};

export default FilterContent;
