import React from "react";
import CardContainer from "../../components/dashboard/CardsContainer/CardContainer";
import DropDowns from "../../components/dashboard/CardsContainer/DropDowns";
import { Container } from "../../components/UI/Container/Container";
import CustomDivider from "../../components/UI/Divider/CustomDivider";
import { searchBarStrings } from "../../strings/searchBarStrings";

import Header from "../Header/Header";

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Container className="mainContent">
        <DropDowns
          searchMainQuery={searchBarStrings.searchDropDownOptions[0]}
        />
        <CustomDivider />
        <CardContainer />
      </Container>
    </div>
  );
};

export default DashboardPage;
