import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import FixedHeader from "./FixedHeader";

export default {
  title: "YourComponent",
  component: FixedHeader,
} as ComponentMeta<typeof FixedHeader>;
const Template: ComponentStory<typeof FixedHeader> = (args) => (
  <FixedHeader {...args}>a</FixedHeader>
);

export const FixedHeaderStory = Template.bind({});

FixedHeaderStory.args = {};
