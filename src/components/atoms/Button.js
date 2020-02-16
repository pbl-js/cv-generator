import styled from "styled-components";
import { device } from "theme/BreakPoints";

// Avaible Props: left right secondary smaller
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  padding: 15px 30px;
  min-width: 130px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: ${({ secondary, theme }) =>
    secondary ? "2px solid" : "2px solid " + theme.color.orange};
  border-radius: ${({ left, right }) => {
    if (left) {
      return "10px 0 0 10px";
    } else if (right) {
      return "0 10px 10px 0";
    } else {
      return "10px";
    }
  }};
  background-color: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.color.orange};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.orange : "white"};
  text-decoration: none !important;
  cursor: pointer;

  :hover {
    color: white;
    border: ${({ theme }) => "2px solid" + theme.color.orange};
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.color.orange : theme.color.orangeHover};
  }
`;

export default Button;
