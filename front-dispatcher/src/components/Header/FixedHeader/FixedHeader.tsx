import React from "react";
import HeaderStyle from "./style";
interface HeaderProps {
  children: React.ReactNode;
}

const FixedHeader = ({ children }: HeaderProps) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

export default FixedHeader;
