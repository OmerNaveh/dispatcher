import React from "react";
import CardContainer from "../../components/dashboard/CardsContainer/CardContainer";
import DropDowns from "../../components/dashboard/DropDownsContainer/DropDowns";
import DashboardContenContainer from "../../components/dashboard/DashboardContentContainer/DashboardContenContainer";
import GraphsContainer from "../../components/dashboard/GraphsContainer/GraphsContainer";
import { Container } from "../../components/UI/Container/Container";
import CustomDivider from "../../components/UI/Divider/style";
import { graphString, searchBarStrings } from "../../strings/strings";

import Header from "../Header/Header";

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
