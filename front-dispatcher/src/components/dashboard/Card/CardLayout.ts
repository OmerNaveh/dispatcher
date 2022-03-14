import styled from "styled-components";

const CardLayout = styled.div`
  background: #ffffff;

  border: 1px solid #d9dbe9;
  display: flex;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  margin: 1em;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
  &.graph {
    flex-direction: column;
    padding: 1em;
    width: 90%;
    height: 30%;
    margin: 0.3em 0;
  }
`;

export default CardLayout;
