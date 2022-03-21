import React from "react";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as SettingsIcon } from "../../../../assets/settings.svg";
import { ReactComponent as NotificationsIcon } from "../../../../assets/notifications.svg";
import { ReactComponent as SearchIcon } from "../../../../assets/search.svg";

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
        <SettingsIcon />
      ) : (
        <NotificationsIcon />
      )}
    </IconButton>
  );
};

export default SvgBtns;
