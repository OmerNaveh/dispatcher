import React, { useState } from "react";
import { apiStrings } from "../../../../strings/strings";
import { SortByDiv } from "./style";
import { ReactComponent as DropIcon } from "../../../../assets/dropdown.svg";
import { ReactComponent as FilterIcon } from "../../../../assets/filter.svg";
import { Backdrop } from "@mui/material";

const FilterOnSmallDevices = () => {
  const [clicked, setClicked] = useState<boolean>();
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
          onClick={() => {
            setClicked(!clicked);
          }}
        />
      )}
    </>
  );
};

export default FilterOnSmallDevices;
