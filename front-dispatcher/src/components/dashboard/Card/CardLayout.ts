import styled from "styled-components";

const CardLayout = styled.div`
  background: #ffffff;

  border: 1px solid #d9dbe9;
  display: flex;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export default CardLayout;
