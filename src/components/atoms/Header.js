import styled from "styled-components";

// Avaible Props: white secondary
const Header = styled.h2`
  text-align: center;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ white, theme }) => (white ? "white" : theme.color.veryDarkGray)};
`;

export default Header;
