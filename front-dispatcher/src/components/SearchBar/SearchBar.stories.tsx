import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StyledSearchBarDiv } from "./SearchBarDiv/style";
import InputWithIcon from "./InputWithIcon/InputWithIcon";
import DropDown from "../UI/DropDown/DropDown";

import { Divider } from "@mui/material";
import { headerStrings, storyStrings } from "../../strings/strings";

const options = ["x", "y"];
export default {
  title: storyStrings.HeaderTitle,
  component: StyledSearchBarDiv,
} as ComponentMeta<typeof StyledSearchBarDiv>;
const Template: ComponentStory<typeof StyledSearchBarDiv> = (args) => (
  <StyledSearchBarDiv {...args} className={"grid"}>
    <InputWithIcon />
    <Divider orientation="vertical" variant="middle" flexItem />
    <DropDown options={options} placeHolder={headerStrings.Search} />
  </StyledSearchBarDiv>
);

export const SearchBarStory = Template.bind({});

SearchBarStory.args = {};
