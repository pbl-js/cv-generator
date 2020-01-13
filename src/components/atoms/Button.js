import styled from "styled-components";

// Avaible Props: left right secondary smaller
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  min-height: 35px;
  width: 130px;
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: ${({ secondary }) => (secondary ? "1px solid" : "none")};
  border-radius: ${({ left, right }) => {
    if (left) {
      return "99px 0 0 99px";
    } else if (right) {
      return "0 99px 99px 0";
    } else {
      return "99px";
    }
  }};
  background-color: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.color.orange};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.orange : "white"};
  text-decoration: none;
  cursor: pointer;

  :hover {
    /* transform: scale(1.05); */
    border: 0;
    color: white;
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.color.orange : theme.color.orangeHover};
  }
`;

export default Button;
