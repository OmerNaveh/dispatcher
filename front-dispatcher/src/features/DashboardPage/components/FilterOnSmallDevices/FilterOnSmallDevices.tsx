import React, { useRef, useState } from "react";

import { apiStrings, searchBarStrings } from "../../../../strings/strings";
import { SortByDiv } from "./style";
import { ReactComponent as DropIcon } from "../../../../assets/dropdown.svg";
import { ReactComponent as FilterIcon } from "../../../../assets/filter.svg";
import { Backdrop } from "@mui/material";
import FilterContent from "./components/FilterContent";
const FilterOnSmallDevices = () => {
  const [clicked, setClicked] = useState<boolean>();
  const backDropElem = useRef(null);
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
