import React from "react";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as SettingsIcon } from "../../../assets/settings.svg";
import { ReactComponent as NotificationsIcon } from "../../../assets/notifications.svg";

interface svgBtnProps {
  settings?: boolean;
}

const SvgBtns = ({ settings }: svgBtnProps) => {
  return (
    <IconButton>
      {settings ? <SettingsIcon /> : <NotificationsIcon />}
    </IconButton>
  );
};

export default SvgBtns;
