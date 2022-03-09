import React from "react";
import FixedHeader from "../../components/UI/FixedHeader/FixedHeader";
interface HeaderProps {
  children: React.ReactNode;
}
export default function Header({ children }: HeaderProps) {
  return <FixedHeader>{children}</FixedHeader>;
}
