import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { storyStrings } from "../../../strings/storyStrings";
import NotFound from "./NotFound";

export default {
  title: storyStrings.DashTitle,
  component: NotFound,
} as ComponentMeta<typeof NotFound>;
const Template: ComponentStory<typeof NotFound> = (args) => <NotFound />;

export const NotFoundStory = Template.bind({});

NotFoundStory.args = {};
