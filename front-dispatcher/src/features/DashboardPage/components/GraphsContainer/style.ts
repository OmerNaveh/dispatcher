import styled from "styled-components";

const StyledGraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7em 1em;
  height: 70%;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export default StyledGraphsContainer;
