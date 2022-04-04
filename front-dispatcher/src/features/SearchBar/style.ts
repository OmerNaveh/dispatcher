import styled from "styled-components";
import { colors } from "../../strings/colors";
import Input from "@mui/material/Input";
import { ReactComponent as ExitIcon } from "../../assets/exit.svg";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
interface props {
  focused?: boolean;
}
export const StyledSearchBarDiv = styled.div<props>`
  background: ${colors.White};
  border-radius: 10px;
  transition: width 200ms ease;
  font-size: 87.5%;
  display: grid;
  align-items: center;
  min-width: 351px;
  grid-template-columns: 60% 5% 35%;
  padding: 0.35% 1%;
  width: ${(props) => (props.focused ? "34%" : "21%")};
  max-width: 625px;
  position: absolute;
  left: 10%;
  max-height: 50%;
  align-content: center;
  @media only screen and (max-width: 970px) {
    width: 21%;
  }
  @media only screen and (max-width: 900px) {
    width: 50%;
    grid-template-columns: 1fr;
    min-width: 250px;
    left: 15%;
    > * {
      display: none;
    }
  }
  @media only screen and (max-width: 580px) {
    display: none;
  }
`;
export const StyledMobileSearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.White};
  position: fixed;
  width: 100vw;
  height: 74px;
  top: 0;
  left: 0;
`;
interface mobile {
  mobile?: boolean;
}
export const StyledInputWithIcon = styled(Input)<mobile>`
  width: ${(props) => props.mobile && "100%"};
  padding: ${(props) => props.mobile && "0 3% 0 1%"};
  min-height: 41.5px;
`;
export const StyledExitIcon = styled(ExitIcon)`
  height: 18px;
  width: 18px;
  cursor: pointer;
`;

export const StyledBackIcon = styled(BackIcon)`
  cursor: pointer;
  margin: 0 0 0 16px;
`;
