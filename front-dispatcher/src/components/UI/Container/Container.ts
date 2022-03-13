import styled from "styled-components";

export const Container = styled.div`
  margin: 0 5%;
  &.flex {
    display: flex;
    align-items: center;
  }
  &.column {
    flex-direction: column;
  }
  &.graph {
    margin-top: 10%;
  }
  &.relative {
    position: relative;
  }
`;
