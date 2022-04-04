import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../../../assets/back.svg";
import PrimaryButton from "../../../../../components/PrimaryButton/style";
import { chooseCorrectActionType } from "../../../../../helpers/actionTypeSelector";
import { apiCallthunk, getApiUrl } from "../../../../../helpers/apiCall";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { filterActions } from "../../../../../store/slicers/filtersSlice";
import {
  apiStrings,
  ReduxString,
  searchBarStrings,
} from "../../../../../strings/strings";
import {
  FilterBtnDiv,
  FilterDiv,
  FilterItemCardContainer,
  FilterItemsContainer,
  FilterItemText,
  FilterItemTitle,
} from "../style";
const FilterContent = () => {
  const filterState = useAppSelector((state) => state.filters);
  type T = keyof typeof filterState;
  const dispatch = useAppDispatch();
  const { endpoint } = filterState;
  const [filterTitle, setFilterTitle] = useState<string>(
    searchBarStrings.filter
  );
  const currentStateDesc = (filterOption: string) => {
    if (filterOption === ReduxString.Dates) return filterState.date;
    if (filterOption === ReduxString.Sources)
      return endpoint === ReduxString.Everything
        ? filterState.sourceEverything
        : filterState.sourceTopheadlines;
    return filterState[filterOption.toLowerCase() as T];
  };
  const filterItemOnClickFC = (newValue: string) => {
    const correctFilterAction = chooseCorrectActionType(
      filterTitle,
      filterState.endpoint
    );
    dispatch(filterActions[correctFilterAction](newValue));
    setFilterTitle(searchBarStrings.filter);
  };
  const cardContainers = () =>
    apiStrings[filterTitle] ? (
      apiStrings[filterTitle].map((title) => (
        <FilterItemCardContainer
          key={title}
          onClick={() => filterItemOnClickFC(title)}
        >
          <FilterItemText>{title}</FilterItemText>
        </FilterItemCardContainer>
      ))
    ) : (
      <>
        <FilterItemCardContainer
          onClick={() => setFilterTitle(searchBarStrings.searchIn)}
        >
          <FilterItemText>{searchBarStrings.searchIn}</FilterItemText>
          <FilterItemText>{endpoint}</FilterItemText>
        </FilterItemCardContainer>
        {apiStrings[endpoint].map((filterOption) =>
          filterOption === ReduxString.SortBy ? (
            <></>
          ) : (
            <FilterItemCardContainer
              key={filterOption}
              onClick={() => setFilterTitle(filterOption)}
            >
              <FilterItemText>{filterOption}</FilterItemText>
              <FilterItemText
                notSelected={currentStateDesc(filterOption) ? false : true}
              >
                {currentStateDesc(filterOption) || searchBarStrings.all}
              </FilterItemText>
            </FilterItemCardContainer>
          )
        )}
      </>
    );
  const ButtonApiSearchOnClick = () => {
    const url = getApiUrl(filterState);
    dispatch(apiCallthunk(url));
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
        <PrimaryButton onClick={ButtonApiSearchOnClick}>
          {searchBarStrings.viewResults}
        </PrimaryButton>
      </FilterBtnDiv>
    </FilterDiv>
  );
};

export default FilterContent;
