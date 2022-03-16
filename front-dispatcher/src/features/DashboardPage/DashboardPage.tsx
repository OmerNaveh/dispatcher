import React from "react";

import { Container } from "../../components/UI/Container/Container";
import CustomDivider from "../../components/UI/Divider/style";
import { searchBarStrings } from "../../strings/strings";

import Header from "../Header/Header";
import DashboardContenContainer from "./components/DashboardContentContainer/DashboardContenContainer";
import DropDowns from "./components/DropDownsContainer/DropDowns";

const DashboardPage = () => {
  return (
    <Container className="fullScreen dashColor">
      <Header />
      <Container className="mainContent">
        <DropDowns
          searchMainQuery={searchBarStrings.searchDropDownOptions[0]}
        />
        <CustomDivider />
        <DashboardContenContainer />
      </Container>
    </Container>
  );
};

export default DashboardPage;
