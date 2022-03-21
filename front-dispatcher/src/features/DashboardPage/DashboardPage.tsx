import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import CustomDivider from "../../components/Divider/style";

import { searchBarStrings } from "../../strings/strings";

import Header from "../Header/Header";
import DashboardContenContainer from "./components/DashboardContentContainer/DashboardContenContainer";
import DropDowns from "./components/DropDownsContainer/DropDowns";
import FilterOnSmallDevices from "./components/FilterOnSmallDevices/FilterOnSmallDevices";
import { resizeListener } from "../Header/utils/listenerUtils";

const DashboardPage = () => {
  const [isNotDesktop, setIsNotDesktop] = useState<boolean>(
    window.innerWidth < 900
  );
  useEffect(() => {
    resizeListener(setIsNotDesktop, 900);
  }, []);
  return (
    <Container className="fullScreen dashColor">
      <Header />
      {isNotDesktop && <FilterOnSmallDevices />}
      <Container className="mainContent">
        {!isNotDesktop && (
          <DropDowns
            searchMainQuery={searchBarStrings.searchDropDownOptions[0]}
          />
        )}
        {!isNotDesktop && <CustomDivider />}
        <DashboardContenContainer />
      </Container>
    </Container>
  );
};
export default DashboardPage;
