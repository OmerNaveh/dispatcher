import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { graphString, storyStrings } from "../../../strings/strings";
import GraphsContainer from "./GraphsContainer";

export default {
  title: storyStrings.DashTitle,
  component: GraphsContainer,
} as ComponentMeta<typeof GraphsContainer>;
const Template: ComponentStory<typeof GraphsContainer> = (args) => (
  <GraphsContainer {...args}></GraphsContainer>
);

export const GraphsContainerStory = Template.bind({});

GraphsContainerStory.args = {
  graphTypeArray: graphString.graphTypeArray,
};
