import styled from "styled-components";

// Avaible Props: active
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 99px;
  background-color: ${({ theme, active }) =>
    active ? theme.color.orange : theme.color.extraLightPurple};
  color: ${({ theme, active }) => (active ? "white" : theme.color.lightPurple)};
  cursor: ${({ active }) => (active ? "" : "pointer")};
  svg {
    width: 35%;
  }
`;

export default Button;
