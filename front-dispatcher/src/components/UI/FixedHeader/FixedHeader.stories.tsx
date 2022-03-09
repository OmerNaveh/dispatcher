import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./FixedHeader";
import LogoSvg from "../LogoSvg/LogoSvg";

export default {
  title: "YourComponent",
  component: Header,
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <LogoSvg className="header" />
  </Header>
);

export const HeaderStory = Template.bind({});

HeaderStory.args = {};
