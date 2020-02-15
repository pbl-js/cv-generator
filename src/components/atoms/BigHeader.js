import styled from "styled-components";

// Avaible Props: white secondary
const BigHeader = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ white, theme }) => (white ? "white" : theme.color.veryDarkGray)};
`;

export default BigHeader;
