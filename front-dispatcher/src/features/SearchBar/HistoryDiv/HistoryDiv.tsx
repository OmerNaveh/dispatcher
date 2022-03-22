import React from "react";
import { historyStrings } from "../../../strings/strings";

import {
  StyledHistoryContentDiv,
  StyledHistoryDiv,
  StyledHistoryExitIcon,
  StyledHistoryTextDiv,
  StyledHistoryTexts,
  StyledHistoryTitleTexts,
} from "./style";
interface historyProps {
  data: string[];
}
// TODO: implement utils fucntion to fetch data from local storage and clear on click on clear text
const HistoryDiv = ({ data }: historyProps) => {
  const genrateStorageHistoryOptions = () => {
    return data.map((historyStr, index) => (
      <StyledHistoryTextDiv key={index}>
        <StyledHistoryTexts>{historyStr}</StyledHistoryTexts>
        <StyledHistoryExitIcon />
      </StyledHistoryTextDiv>
    ));
  };
  return (
    <StyledHistoryDiv>
      <StyledHistoryTextDiv isTitle={true}>
        <StyledHistoryTitleTexts>
          {historyStrings.RecentSearches}
        </StyledHistoryTitleTexts>
        <StyledHistoryTitleTexts clickable={true}>
          {historyStrings.Clear}
        </StyledHistoryTitleTexts>
      </StyledHistoryTextDiv>
      <StyledHistoryContentDiv>
        {genrateStorageHistoryOptions()}
      </StyledHistoryContentDiv>
    </StyledHistoryDiv>
  );
};

export default HistoryDiv;
