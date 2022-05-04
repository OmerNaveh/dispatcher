import React from "react";
import {
  clearSearchFromHistory,
  ClearSearchHistory,
  getHistory,
} from "../../../helpers/localStorageUsage";
import { historyStrings, usefulStrings } from "../../../strings/strings";

import {
  StyledHistoryContentDiv,
  StyledHistoryDiv,
  StyledHistoryExitIcon,
  StyledHistoryTextDiv,
  StyledHistoryTexts,
  StyledHistoryTitleTexts,
} from "./style";
interface historyProps {
  historyData: string[];
  setHistoryData: React.Dispatch<React.SetStateAction<string[]>>;
  handleHistoryClick: (historyStr: string) => void;
  mobile?: boolean;
  setFocused?: React.Dispatch<React.SetStateAction<boolean>>;
}
const HistoryDiv = ({
  historyData,
  setHistoryData,
  handleHistoryClick,
  mobile,
  setFocused,
}: historyProps) => {
  const clearOneFromHistory = (historyStr: string) => {
    clearSearchFromHistory(historyStr);
    setHistoryData(getHistory());
  };
  const clearAllHistory = () => {
    ClearSearchHistory();
    setHistoryData(getHistory());
  };
  const genrateStorageHistoryOptions = () => {
    return historyData.map((historyStr, index) => (
      <StyledHistoryTextDiv
        key={index}
        onClick={(e) => {
          if (mobile && setFocused) {
            setFocused(false);
          }
          (e.target as Node).nodeName === usefulStrings.Div &&
            handleHistoryClick(historyStr);
        }}
      >
        <StyledHistoryTexts>{historyStr}</StyledHistoryTexts>
        <StyledHistoryExitIcon
          onClick={() => clearOneFromHistory(historyStr)}
        />
      </StyledHistoryTextDiv>
    ));
  };
  return (
    <StyledHistoryDiv mobile={mobile}>
      <StyledHistoryTextDiv isTitle>
        <StyledHistoryTitleTexts>
          {historyStrings.RecentSearches}
        </StyledHistoryTitleTexts>
        <StyledHistoryTitleTexts clickable onClick={clearAllHistory}>
          {historyStrings.Clear}
        </StyledHistoryTitleTexts>
      </StyledHistoryTextDiv>
      <StyledHistoryContentDiv>
        {historyData.length ? genrateStorageHistoryOptions() : <></>}
      </StyledHistoryContentDiv>
    </StyledHistoryDiv>
  );
};

export default HistoryDiv;
