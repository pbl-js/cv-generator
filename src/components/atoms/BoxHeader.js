import styled from "styled-components";

// Avaible Props:
const BoxHeader = styled.header`
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.color.veryDarkGray};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  margin-bottom: 20px;
  svg {
    width: 20px;
    height: 20px;
  }

  svg:last-of-type {
    width: 20px;
    height: 20px;
    margin-left: auto;
    cursor: pointer;
  }

  h1 {
    margin-left: 10px;
  }
`;

export default BoxHeader;
