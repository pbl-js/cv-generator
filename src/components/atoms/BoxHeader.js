import styled from "styled-components";
import { device } from "theme/BreakPoints";

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
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media ${device.mobileL} {
    h2 {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }

  @media ${device.tablet} {
    padding: 30px 0;
  }
`;

export default BoxHeader;
