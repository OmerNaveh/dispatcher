import React from "react";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as SettingsIcon } from "../../../../assets/settings.svg";
import { ReactComponent as SearchIcon } from "../../../../assets/search.svg";
import { StyledNotificationIcon } from "./style";
import { Tooltip } from "@mui/material";

interface svgBtnProps {
  settings?: boolean;
  search?: boolean;
  onClickFunc?: () => void;
}

const SvgBtns = ({ settings, search, onClickFunc }: svgBtnProps) => {
  return (
    <IconButton>
      {search ? (
        <SearchIcon onClick={onClickFunc} />
      ) : settings ? (
        <Tooltip title="Coming soon">
          <SettingsIcon />
        </Tooltip>
      ) : (
        <Tooltip title="Coming soon">
          <StyledNotificationIcon />
        </Tooltip>
      )}
    </IconButton>
  );
};

export default SvgBtns;
