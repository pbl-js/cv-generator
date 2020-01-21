import styled from "styled-components";
import { device } from "theme/BreakPoints";

// Avaible Props: active
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 0;
  border-radius: 99px;
  background-color: ${({ theme, active }) =>
    active ? theme.color.orange : theme.color.extraLightPurple};
  color: ${({ theme, active }) => (active ? "white" : theme.color.lightPurple)};
  cursor: ${({ active }) => (active ? "" : "pointer")};
  z-index: 2;
  transition: 0.2s;
  svg {
    width: 35%;
  }

  @media ${device.mobileM} {
    width: 40px;
    height: 40px;
  }

  @media ${device.tablet} {
    width: 50px;
    height: 50px;
  }
`;

export default Button;
