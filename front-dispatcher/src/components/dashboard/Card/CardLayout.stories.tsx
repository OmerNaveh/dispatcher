import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./CardLayout";
import { storyStrings } from "../../../strings/storyStrings";

export default {
  title: storyStrings.CardTitle,
  component: Card,
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>PRIMARY</Card>
);

export const CardLayoutStory = Template.bind({});

CardLayoutStory.args = {};
