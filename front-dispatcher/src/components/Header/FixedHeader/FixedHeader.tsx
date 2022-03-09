import React from "react";
import HeaderStyle from "./style";
interface HeaderProps {
  children: React.ReactNode;
}
export default function FixedHeader({ children }: HeaderProps) {
  return <HeaderStyle>{children}</HeaderStyle>;
}
