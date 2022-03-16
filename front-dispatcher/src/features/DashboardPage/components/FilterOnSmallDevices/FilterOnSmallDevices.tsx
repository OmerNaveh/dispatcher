import React, { useRef, useState } from "react";

import { apiStrings, searchBarStrings } from "../../../../strings/strings";
import { FilterBtnDiv, FilterDiv, SortByDiv } from "./style";
import { ReactComponent as DropIcon } from "../../../../assets/dropdown.svg";
import { ReactComponent as FilterIcon } from "../../../../assets/filter.svg";
import { Backdrop } from "@mui/material";
import PrimaryButton from "../../../../components/PrimaryButton/style";
const FilterOnSmallDevices = () => {
  const [clicked, setClicked] = useState<boolean>();
  const searchBtn = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <SortByDiv onClick={() => setClicked(!clicked)}>
        <div>
          {apiStrings.EverythingOptions[0]}
          <DropIcon style={{ marginLeft: "1em" }} />
        </div>
        <FilterIcon />
      </SortByDiv>
      {clicked && (
        <Backdrop
          sx={{ color: "#fff", zIndex: "5" }}
          open={clicked}
          onClick={(e) => {
            if (searchBtn && e.target == searchBtn.current) return;
            setClicked(!clicked);
          }}
          children={
            <FilterDiv>
              <FilterBtnDiv>
                <PrimaryButton ref={searchBtn}>
                  {searchBarStrings.viewResults}
                </PrimaryButton>
              </FilterBtnDiv>
            </FilterDiv>
          }
        />
      )}
    </>
  );
};

export default FilterOnSmallDevices;
