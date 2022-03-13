import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storyStrings } from "../../strings/storyStrings";
import DashboardPage from "./DashboardPage";

export default {
  title: storyStrings.DashTitle,
  component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>;
const Template: ComponentStory<typeof DashboardPage> = (args) => (
  <DashboardPage></DashboardPage>
);

export const DashboardPageStory = Template.bind({});

DashboardPageStory.args = {};
