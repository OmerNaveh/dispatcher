import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storyStrings } from "../../../../strings/strings";
import FilterOnSmallDevices from "./FilterOnSmallDevices";

export default {
  title: storyStrings.DashTitle,
  component: FilterOnSmallDevices,
} as ComponentMeta<typeof FilterOnSmallDevices>;
const Template: ComponentStory<typeof FilterOnSmallDevices> = (args) => (
  <FilterOnSmallDevices></FilterOnSmallDevices>
);

export const FilterOnSmallDevicesStory = Template.bind({});

FilterOnSmallDevicesStory.args = {};
