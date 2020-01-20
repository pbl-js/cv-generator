import styled from "styled-components";

// Avaible Props: white secondary
const Paragraph = styled.p`
  text-align: center;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.s)};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ white, theme }) => (white ? "white" : theme.color.darkGray)};
`;

export default Paragraph;
