import React from "react";
import { graphObjType } from "../../utils/graphData";
import {
  PercentageContainer,
  ProgressBar,
  TagEntryContainer,
  TagsDivContainer,
  TagText,
} from "./style";
interface tagsProps {
  data: graphObjType[];
  total: number;
}
const TagsGraph = ({ data, total }: tagsProps) => {
  const showTagsData = () => {
    return data.map((entry) => {
      const percentageValue = Math.floor((entry.value / total) * 100);
      return (
        <TagEntryContainer>
          <TagText>{entry.name}</TagText>
          <PercentageContainer>
            <TagText bold>{`${percentageValue}%`}</TagText>
            <ProgressBar value={percentageValue} max={100} />
          </PercentageContainer>
        </TagEntryContainer>
      );
    });
  };

  return <TagsDivContainer>{showTagsData()}</TagsDivContainer>;
};

export default TagsGraph;
