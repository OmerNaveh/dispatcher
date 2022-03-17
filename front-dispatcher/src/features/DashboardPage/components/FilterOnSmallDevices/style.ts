import styled from "styled-components";
import { colors } from "../../../../strings/colors";

export const SortByDiv = styled.div`
  background-color: ${colors.White};
  display: flex;
  justify-content: space-between;
  padding: 0 12px 0 16px;
  max-width: 100vw;
  height: 5%;
  align-items: center;
  border: 1px solid ${colors.Gray};
  color: ${colors.DarkBlue};
  font-size: 95%;
  font-family: Roboto;
  cursor: pointer;
  font-weight: 400;
`;
export const FilterDiv = styled.div`
  z-index: 500;
  height: 100vh;
  width: 48vw;
  background-color: ${colors.White};
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 580px) {
    width: 79%;
  }
`;
export const FilterBtnDiv = styled.div`
  background-color: ${colors.LightestGray};
  height: 9.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const FilterItemCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${colors.Gray};
  :hover {
    background-color: ${colors.LightestGray};
    cursor: pointer;
  }
`;

export const FilterItemText = styled.p`
  font-family: Roboto;
  font-weight: 400;
  color: ${colors.DarkBlue};
  padding: 0 8%;
  &.notSelected {
    color: ${colors.Gray};
  }
`;
interface filterTitleProps {
  pointer?: boolean;
}
export const FilterItemTitle = styled.p<filterTitleProps>`
  font-family: Roboto;
  font-weight: 500;
  font-size: 120%;
  color: ${colors.DarkBlue};
  padding: 0 8%;
  height: 74px;
  cursor: ${(p) => (p.pointer ? "pointer" : "")};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.Gray};
  margin: 0;
`;
