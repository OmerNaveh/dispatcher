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
  // will have state that contains all filter types for api usage
  const mainFilterState = searchBarStrings.searchDropDownOptions[0];
  const [filterTitle, setFilterTitle] = useState<string>(
    searchBarStrings.filter
  );
  const cardContainers = () => {
    if (apiStrings[filterTitle]) {
      return apiStrings[filterTitle].map((title) => (
        // on click on container will change api state settings for selected filter title
        <FilterItemCardContainer key={title}>
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
            {mainFilterState}
          </FilterItemText>
        </FilterItemCardContainer>
        {apiStrings[mainFilterState].map((filterOption) => (
          <FilterItemCardContainer
            key={filterOption}
            onClick={() => setFilterTitle(filterOption)}
          >
            <FilterItemText>{filterOption}</FilterItemText>
            <FilterItemText notSelected={true}>
              {searchBarStrings.all}
            </FilterItemText>
          </FilterItemCardContainer>
        ))}
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
