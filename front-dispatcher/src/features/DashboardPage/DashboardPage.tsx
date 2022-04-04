import React, { useEffect, useState } from "react";
import CustomDivider from "../../components/Divider/style";
import {
  cardResultsStrings,
  ReduxString,
  usefulStrings,
} from "../../strings/strings";
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
import { useAppDispatch, useAppSelector } from "../../store";
import { apiCallthunk, getApiUrl } from "../../helpers/apiCall";

const DashboardPage = () => {
  const [isNotDesktop, setIsNotDesktop] = useState<boolean>(
    window.innerWidth < 900
  );
  const filterState = useAppSelector((state) => state.filters);
  const { country, category, sourceTopheadlines, searchInput, endpoint } =
    filterState;
  const apiData = useAppSelector((state) => state.apiData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    resizeListener(setIsNotDesktop, 900);
    // TODO: change starting default country based on users ip
    const apiUrl = getApiUrl({ ...filterState, country: "il" });
    dispatch(apiCallthunk(apiUrl));
  }, []);
  const isFirstVisit =
    country ||
    category ||
    sourceTopheadlines ||
    searchInput ||
    endpoint === ReduxString.Everything
      ? false
      : true;
  return (
    <StyledDashboardDiv>
      <Header />
      {isNotDesktop && <FilterOnSmallDevices />}
      <StyledMainContentDiv>
        {!isNotDesktop && <DropDowns searchMainQuery={endpoint} />}
        {!isNotDesktop && <CustomDivider />}
        {((apiData.status && apiData.status !== ReduxString.Loading) ||
          apiData.totalResults === 0) && (
          <CustomDashboardText firstVisit={isFirstVisit}>
            {isFirstVisit
              ? cardResultsStrings.topHeadlinesIn
              : apiData.totalResults +
                usefulStrings.whiteSpace +
                cardResultsStrings.totalResults}
          </CustomDashboardText>
        )}
        <DashboardContenContainer />
      </StyledMainContentDiv>
    </StyledDashboardDiv>
  );
};
export default DashboardPage;
