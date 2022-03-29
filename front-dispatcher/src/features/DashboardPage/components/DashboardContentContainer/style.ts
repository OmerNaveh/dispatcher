import styled from "styled-components";

const StyledDashboardContentDiv = styled.div`
  display: grid;
  grid-template-columns: 68.5% 31.5%;
  height: 100%;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default StyledDashboardContentDiv;
