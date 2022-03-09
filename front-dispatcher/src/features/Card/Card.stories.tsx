import React from "react";
import mock from "../../mock/mockData.json";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";
import { storyStrings } from "../../strings/storyStrings";

const {
  author,
  content,
  url,
  urlToImage,
  title,
  description,
  publishedAt,
  source,
} = mock.articles[2];

const sourceName = source.name;
const sourceId = source.id ? source.id : "";

export default {
  title: storyStrings.CardTitle,
  component: Card,
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const CardStory = Template.bind({});

CardStory.args = {
  urlToImage,
  title,
  url,
  publishedAt,
  source: { name: sourceName, id: sourceId },
  description,
};
