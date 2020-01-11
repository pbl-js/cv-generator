import styled from "styled-components";

// Avaible Props:
const BoxHeader = styled.div`
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
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export default BoxHeader;
