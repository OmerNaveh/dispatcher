import React from "react";
import mock from "../../mock/mockData.json";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

const {
  author,
  content,
  url,
  urlToImage,
  title,
  description,
  publishedAt,
  source,
} = mock.articles[0];

const sourceName = source.name;
const sourceId = source.id ? source.id : "";

export default {
  title: "YourComponent",
  component: Card,
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const CardStory = Template.bind({});

CardStory.args = {
  urlToImage,
  title,
  publishedAt,
  source: { name: sourceName, id: sourceId },
};
