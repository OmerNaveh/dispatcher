import React from "react";
import PrimaryButton from "../../../../../components/PrimaryButton/style";
import { searchBarStrings } from "../../../../../strings/strings";
import {
  FilterBtnDiv,
  FilterDiv,
  FilterItemCardContainer,
  FilterItemsContainer,
  FilterItemText,
} from "../style";

const FilterContent = () => {
  //  searchBarStrings.filter
  return (
    <FilterDiv>
      <FilterItemsContainer>
        <FilterItemCardContainer>
          <FilterItemText>ttt</FilterItemText>
          <FilterItemText>ttt</FilterItemText>
        </FilterItemCardContainer>
      </FilterItemsContainer>
      <FilterBtnDiv>
        <PrimaryButton>{searchBarStrings.viewResults}</PrimaryButton>
      </FilterBtnDiv>
    </FilterDiv>
  );
};

export default FilterContent;
