import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Graph from "./Graph";
import { storyStrings } from "../../../../strings/strings";

export default {
  title: storyStrings.DashTitle,
  component: Graph,
} as ComponentMeta<typeof Graph>;
const Template: ComponentStory<typeof Graph> = (args) => (
  <Graph {...args} title={storyStrings.HeaderTitle}></Graph>
);

export const GraphStory = Template.bind({});

GraphStory.args = {};
