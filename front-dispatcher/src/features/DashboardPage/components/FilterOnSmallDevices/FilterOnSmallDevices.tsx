import React, { useRef, useState } from "react";

import { apiStrings } from "../../../../strings/strings";
import { FilterIconStyled, MobileFilterDiv, SortByDiv } from "./style";
import { Backdrop } from "@mui/material";
import FilterContent from "./components/FilterContent";
import DropDown from "../../../../components/DropDown/DropDown";
const FilterOnSmallDevices = () => {
  const [clicked, setClicked] = useState<boolean>();
  const backDropElem = useRef(null);
  const SortByString = apiStrings.Everything[0];
  //TODO: react to state of primary search type to decide showing SortBy DropDown
  return (
    <>
      <MobileFilterDiv>
        {/*TODO: conditional if not TOP HEADLINES <div /> */}
        <SortByDiv>
          <DropDown
            options={apiStrings[SortByString]}
            placeHolder={SortByString}
          />
        </SortByDiv>
        {/* TODO: Pass Changes made to filterIcon to changeColor */}
        <FilterIconStyled onClick={() => setClicked(!clicked)} />
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
