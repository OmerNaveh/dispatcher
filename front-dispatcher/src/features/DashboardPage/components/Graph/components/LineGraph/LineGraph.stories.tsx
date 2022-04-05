import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storyStrings } from "../../../../../../strings/strings";
import LineGraph from "./LineGraph";
import mock from "../../../../../../mock/mockData.json";
export default {
  title: storyStrings.DashTitle,
  component: LineGraph,
} as ComponentMeta<typeof LineGraph>;
const Template: ComponentStory<typeof LineGraph> = (args) => (
  <LineGraph {...args} />
);
const data = [
  {
    name: "April",
    value: 2400,
  },
  {
    name: "March",
    value: 2210,
  },
  {
    name: "July",
    value: 2290,
  },
  {
    name: "June",
    value: 2000,
  },
  {
    name: "August",
    value: 2181,
  },
  {
    name: "January",
    value: 2500,
  },
  {
    name: "May",
    value: 2100,
  },
];
const mockData = mock.articles.map(({ publishedAt }, index) => {
  const dateFormat = new Date(publishedAt);
  return {
    identifier: String(dateFormat.getHours()),
    date: dateFormat,
  };
});
export const LineGraphStory = Template.bind({});

LineGraphStory.args = {
  data,
};
