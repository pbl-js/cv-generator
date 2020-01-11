import styled from "styled-components";

// Avaible Props: white secondary
const ProgressBar = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: ${({ progress, total }) =>
    progress ? `${(100 / (total - 1)) * (progress - 1)}%` : "100%"};
  height: 4px;
  border-radius: 100px;
  background-color: ${({ progress, theme }) =>
    progress ? theme.color.orange : theme.color.extraLightPurple};
  transition: 0.2s;
`;

export default ProgressBar;
