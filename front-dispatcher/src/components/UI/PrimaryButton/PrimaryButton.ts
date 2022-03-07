import styled from "styled-components";

const PrimaryButton = styled.button`
  background: #0058b9;
  border-radius: 20px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;
export default PrimaryButton;
