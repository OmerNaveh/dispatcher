import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrimaryButton from "./PrimaryButton";

export default {
  title: "YourComponent",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;
const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args}>PRIMARY</PrimaryButton>
);

export const PrimaryBtnStory = Template.bind({});

PrimaryBtnStory.args = {};
