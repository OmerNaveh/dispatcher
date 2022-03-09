import React from "react";
import FixedHeader from "../../components/Header/FixedHeader/FixedHeader";
import LogoSvg from "../../components/UI/LogoSvg/LogoSvg";

export default function Header() {
  return (
    <FixedHeader>
      <LogoSvg className="header" />
    </FixedHeader>
  );
}
