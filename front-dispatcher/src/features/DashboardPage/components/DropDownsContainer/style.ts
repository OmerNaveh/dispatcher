import styled from "styled-components";
export const DropDownsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 14% 14% 14% 14% 62%;
  grid-column-gap: 1em;
  @media only screen and (max-width: 1500px) {
    grid-template-columns: 15% 15% 15% 15% 40%;
  }
  @media only screen and (max-width: 1300px) {
    grid-template-columns: 18% 18% 18% 18% 40%;
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 20% 20% 20% 20% 40%;
  }
`;
