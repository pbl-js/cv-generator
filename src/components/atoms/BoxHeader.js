import styled from "styled-components";

// Avaible Props:
const BoxHeader = styled.header`
  padding: 20px 0;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.color.veryDarkGray};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
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

  h2 {
    margin-left: 10px;
  }
`;

export default BoxHeader;
