import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrimaryButton from "./PrimaryButton";
import { storyStrings } from "../../../strings/storyStrings";

export default {
  title: storyStrings.UITitle,
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;
const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args}>{storyStrings.UITitle}</PrimaryButton>
);

export const PrimaryBtnStory = Template.bind({});

PrimaryBtnStory.args = {};
