import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import DropDown from "./DropDown";

export default {
  title: "YourComponent",
  component: DropDown,
} as ComponentMeta<typeof DropDown>;
const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args}></DropDown>
);

export const DropDownStory = Template.bind({});

DropDownStory.args = {
  options: ["a", "b", "c", "d", "e", "f", "g"],
  placeHolder: "select",
  history: true,
};
