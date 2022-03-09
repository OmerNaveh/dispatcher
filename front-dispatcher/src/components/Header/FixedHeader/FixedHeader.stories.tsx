import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./FixedHeader";
import LogoSvg from "../../UI/LogoSvg/LogoSvg";
import { SvgBtn } from "../HeaderSvgs/svgBtn";

export default {
  title: "YourComponent",
  component: Header,
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <LogoSvg className="header" />
    <input></input>
    <div>
      <SvgBtn settings={true}></SvgBtn>
      <SvgBtn />
    </div>
  </Header>
);

export const HeaderStory = Template.bind({});

HeaderStory.args = {};
