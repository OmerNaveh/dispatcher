import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import DropDown from "./DropDown";
import { storyStrings } from "../../../strings/strings";

const arrayofString = ["a", "b", "c", "d", "e", "f", "g"];
export default {
  title: storyStrings.UITitle,
  component: DropDown,
} as ComponentMeta<typeof DropDown>;
const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args}></DropDown>
);

export const DropDownStory = Template.bind({});

DropDownStory.args = {
  options: arrayofString,
  placeHolder: storyStrings.UITitle,
  history: true,
};
