import React, { useEffect, useState } from "react";

import SvgBtns from "../../components/Header/HeaderSvgs/SvgBtns";
import HeadrUserBtn from "../../components/Header/HeaderUserBtn/HeadrUserBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container } from "../../components/UI/Container/Container";
import LogoSvg from "../../components/UI/LogoSvg/style";
import { headerStrings } from "../../strings/strings";
import HeaderStyle from "./style";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 450);
    });
  }, []);

  return (
    <HeaderStyle>
      <LogoSvg className="header" />
      <SearchBar />
      <Container className="flex relative">
        {(window.innerWidth <= 450 || isMobile) && <SvgBtns search={true} />}
        <SvgBtns settings={true} />
        <SvgBtns />
        <HeadrUserBtn userInitials={headerStrings.UserInitials} />
      </Container>
    </HeaderStyle>
  );
};

export default Header;
