import styled from "styled-components";

const StyledGraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  margin-top: 0.8em;
  height: 70%;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export default StyledGraphsContainer;
