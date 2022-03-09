import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./FixedHeader";
import LogoSvg from "../../UI/LogoSvg/LogoSvg";
import { SvgBtn } from "../HeaderSvgs/svgBtn";
import { storyStrings } from "../../../strings/storyStrings";
import HeadrUserBtn from "../HeaderUserBtn/HeadrUserBtn";
import { Container } from "../../UI/Container/Container";

export default {
  title: storyStrings.headerTitle,
  component: Header,
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <LogoSvg className="header" />
    <input></input>
    <Container className="flex">
      <SvgBtn settings={true}></SvgBtn>
      <SvgBtn />
      <HeadrUserBtn userInitials="ON" />
    </Container>
  </Header>
);

export const HeaderStory = Template.bind({});

HeaderStory.args = {};
