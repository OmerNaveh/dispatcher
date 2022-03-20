import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storyStrings } from "../../../../../strings/strings";
import LineGraph from "./LineGraph";

export default {
  title: storyStrings.DashTitle,
  component: LineGraph,
} as ComponentMeta<typeof LineGraph>;
const Template: ComponentStory<typeof LineGraph> = (args) => (
  <LineGraph></LineGraph>
);

export const LineGraphStory = Template.bind({});

LineGraphStory.args = {};
