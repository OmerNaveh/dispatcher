import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./CardLayout";
import { cardString, storyStrings } from "../../../strings/strings";

export default {
  title: storyStrings.CardTitle,
  component: Card,
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>{cardString.Continue}</Card>
);

export const CardLayoutStory = Template.bind({});

CardLayoutStory.args = {};
