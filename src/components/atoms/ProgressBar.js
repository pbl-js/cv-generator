import styled from "styled-components";
import { device } from "theme/BreakPoints";

// Avaible Props: progress total
const ProgressBar = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: ${({ progress, total }) =>
    progress ? `${(100 / (total - 1)) * (progress - 1)}%` : "100%"};
  height: 5px;
  border-radius: 100px;
  background-color: ${({ progress, theme }) =>
    progress ? theme.color.orange : theme.color.extraLightPurple};
  transition: 0.2s;

  @media ${device.tablet} {
    height: 8px;
  }
`;

export default ProgressBar;
