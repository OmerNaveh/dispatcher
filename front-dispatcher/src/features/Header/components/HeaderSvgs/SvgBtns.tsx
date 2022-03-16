import React from "react";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as SettingsIcon } from "../../../../assets/settings.svg";
import { ReactComponent as NotificationsIcon } from "../../../../assets/notifications.svg";
import { ReactComponent as SearchIcon } from "../../../../assets/search.svg";

interface svgBtnProps {
  settings?: boolean;
  search?: boolean;
}

const SvgBtns = ({ settings, search }: svgBtnProps) => {
  return (
    <IconButton>
      {search ? (
        <SearchIcon />
      ) : settings ? (
        <SettingsIcon />
      ) : (
        <NotificationsIcon />
      )}
    </IconButton>
  );
};

export default SvgBtns;
