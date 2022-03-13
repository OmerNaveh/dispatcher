import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storyStrings } from "../../../strings/storyStrings";
import { cardString } from "../../../strings/cardStrings";
import Graph from "./Graph";

export default {
  title: storyStrings.DashTitle,
  component: Graph,
} as ComponentMeta<typeof Graph>;
const Template: ComponentStory<typeof Graph> = (args) => (
  <Graph {...args} title={storyStrings.HeaderTitle}></Graph>
);

export const GraphStory = Template.bind({});

GraphStory.args = {};
