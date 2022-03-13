import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoginPage from "./LoginPage";
import { storyStrings } from "../../strings/storyStrings";

export default {
  title: storyStrings.LoginTitle,
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;
const Template: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage></LoginPage>
);

export const LoginPageStory = Template.bind({});

LoginPageStory.args = {};
