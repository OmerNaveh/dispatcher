import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storyStrings } from "../../strings/storyStrings";
import { StyledSearchBarDiv } from "./SearchBarDiv/style";
import InputWithIcon from "./InputWithIcon/InputWithIcon";
import DropDown from "../UI/DropDown/DropDown";
import { headerStrings } from "../../strings/headerString";
import { Divider } from "@mui/material";

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
