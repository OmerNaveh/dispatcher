import React, { useEffect, useState } from "react";

import SvgBtns from "./components/HeaderSvgs/SvgBtns";

import SearchBar from "../SearchBar/SearchBar";

import { headerStrings } from "../../strings/strings";
import HeaderStyle from "./style";
import { resizeListener } from "./utils/listenerUtils";
import HeadrUserBtn from "./components/HeaderUserBtn/HeadrUserBtn";
import LogoSvg from "../../components/LogoSvg/style";
import { Container } from "../../components/Container/Container";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    resizeListener(setIsMobile);
  }, []);

  return (
    <HeaderStyle>
      <LogoSvg className="header" />
      <SearchBar />
      <Container className="flex relative">
        {(window.innerWidth <= 580 || isMobile) && <SvgBtns search={true} />}
        <SvgBtns settings={true} />
        <SvgBtns />
        <HeadrUserBtn userInitials={headerStrings.UserInitials} />
      </Container>
    </HeaderStyle>
  );
};

export default Header;
