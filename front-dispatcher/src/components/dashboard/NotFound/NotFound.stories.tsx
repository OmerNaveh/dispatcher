import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import NotFound from "./NotFound";
import { storyStrings } from "../../../strings/strings";

export default {
  title: storyStrings.DashTitle,
  component: NotFound,
} as ComponentMeta<typeof NotFound>;
const Template: ComponentStory<typeof NotFound> = (args) => <NotFound />;

export const NotFoundStory = Template.bind({});

NotFoundStory.args = {};
