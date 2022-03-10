import styled from "styled-components";

const CardImage = styled.img`
  width: 20%;
  border-radius: 20px 0px 0px 20px;
  @media only screen and (max-width: 900px) {
    width: 25%;
  }
  @media only screen and (max-width: 450px) {
    width 100%;
    border-radius: 20px 20px 0px 0px;
  }
`;

export default CardImage;
