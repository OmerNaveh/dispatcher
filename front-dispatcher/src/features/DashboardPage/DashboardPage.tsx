import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import CustomDivider from "../../components/Divider/style";

import { cardResultsStrings } from "../../strings/strings";

import Header from "../Header/Header";
import DashboardContenContainer from "./components/DashboardContentContainer/DashboardContenContainer";
import DropDowns from "./components/DropDownsContainer/DropDowns";
import FilterOnSmallDevices from "./components/FilterOnSmallDevices/FilterOnSmallDevices";
import { resizeListener } from "../Header/utils/listenerUtils";
import {
  CustomDashboardText,
  StyledDashboardDiv,
  StyledMainContentDiv,
} from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const DashboardPage = () => {
  const [isNotDesktop, setIsNotDesktop] = useState<boolean>(
    window.innerWidth < 900
  );
  const filterState = useSelector((state: RootState) => state.filters);
  useEffect(() => {
    resizeListener(setIsNotDesktop, 900);
  }, []);
  return (
    <StyledDashboardDiv>
      <Header />
      {isNotDesktop && <FilterOnSmallDevices />}
      <StyledMainContentDiv>
        {!isNotDesktop && <DropDowns searchMainQuery={filterState.endpoint} />}
        {!isNotDesktop && <CustomDivider />}
        {/* TODO: Make Text change based on state */}
        <CustomDashboardText firstVisit={true}>
          {cardResultsStrings.topHeadlinesIn}
        </CustomDashboardText>
        <DashboardContenContainer />
      </StyledMainContentDiv>
    </StyledDashboardDiv>
  );
};
export default DashboardPage;
