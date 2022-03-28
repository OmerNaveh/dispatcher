import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storyStrings } from "../../../../strings/strings";
import DateInput from "./DateInput";

export default {
  title: storyStrings.DashTitle,
  component: DateInput,
} as ComponentMeta<typeof DateInput>;
const Template: ComponentStory<typeof DateInput> = (args) => <DateInput />;

export const DatePickerStory = Template.bind({});

DatePickerStory.args = {};
