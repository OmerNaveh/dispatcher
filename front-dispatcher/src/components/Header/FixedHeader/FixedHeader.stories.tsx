import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./FixedHeader";
import LogoSvg from "../../UI/LogoSvg/LogoSvg";
import { storyStrings } from "../../../strings/storyStrings";
import HeadrUserBtn from "../HeaderUserBtn/HeadrUserBtn";
import { Container } from "../../UI/Container/Container";
import { headerStrings } from "../../../strings/headerString";
import SvgBtn from "../HeaderSvgs/svgBtn";

export default {
  title: storyStrings.headerTitle,
  component: Header,
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <LogoSvg className="header" />
    <input></input>
    <Container className="flex relative">
      <SvgBtn />
      <SvgBtn settings={true} />
      <HeadrUserBtn userInitials={headerStrings.user_initials} />
    </Container>
  </Header>
);

export const HeaderStory = Template.bind({});

HeaderStory.args = {};
