import styled from "styled-components";

// Avaible Props:
const BackgroundLayer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ up }) => (up ? "-1" : "-2")};
  height: ${({ up }) => (up ? "85%" : "90%")};
`;

export default BackgroundLayer;
