import React, { useRef, useState } from "react";

import {
  apiStrings,
  filterActionsStrings,
  ReduxString,
} from "../../../../strings/strings";
import { FilterIconStyled, MobileFilterDiv, SortByDiv } from "./style";
import { Backdrop } from "@mui/material";
import FilterContent from "./components/FilterContent";
import DropDown from "../../../../components/DropDown/DropDown";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
const FilterOnSmallDevices = () => {
  const [clicked, setClicked] = useState<boolean>();
  const filterState = useSelector((state: RootState) => state.filters);
  const {
    endpoint,
    category,
    country,
    sortBy,
    sourceEverything,
    sourceTopHeadlines,
  } = filterState;
  const backDropElem = useRef(null);
  const SortByString = apiStrings.Everything[0];
  return (
    <>
      <MobileFilterDiv>
        {endpoint === ReduxString.Everything ? (
          <SortByDiv>
            <DropDown
              options={apiStrings[SortByString]}
              placeHolder={SortByString}
              reduxActionType={filterActionsStrings[1]}
            />
          </SortByDiv>
        ) : (
          <div></div>
        )}

        <FilterIconStyled
          onClick={() => setClicked(!clicked)}
          changesMade={
            category ||
            country ||
            sortBy ||
            sourceEverything ||
            sourceTopHeadlines
              ? true
              : false
          }
        />
      </MobileFilterDiv>
      {clicked && (
        <Backdrop
          ref={backDropElem}
          sx={{ color: "#fff", zIndex: "5" }}
          open={clicked}
          onClick={(e) => {
            if (backDropElem && e.target !== backDropElem.current) return;
            setClicked(!clicked);
          }}
          children={<FilterContent />}
        />
      )}
    </>
  );
};

export default FilterOnSmallDevices;
