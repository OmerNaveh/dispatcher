import styled from "styled-components";
import SettingsIcon from "../../../assets/settings.svg";
import NotificationsIcon from "../../../assets/notifications.svg";
export const SvgBtn = styled.div<{ settings?: boolean }>`
  content: url(${(p) => (p.settings ? SettingsIcon : NotificationsIcon)});
`;
