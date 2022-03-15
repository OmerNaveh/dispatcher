import React from "react";
import FixedHeader from "../../components/Header/FixedHeader/FixedHeader";
import SvgBtns from "../../components/Header/HeaderSvgs/SvgBtns";
import HeadrUserBtn from "../../components/Header/HeaderUserBtn/HeadrUserBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container } from "../../components/UI/Container/Container";
import LogoSvg from "../../components/UI/LogoSvg/style";
import { headerStrings } from "../../strings/strings";

const Header = () => {
  return (
    <FixedHeader>
      <LogoSvg className="header" />
      <SearchBar />
      <Container className="flex relative">
        <SvgBtns settings={true} />
        <SvgBtns />
        <HeadrUserBtn userInitials={headerStrings.UserInitials} />
      </Container>
    </FixedHeader>
  );
};

export default Header;
