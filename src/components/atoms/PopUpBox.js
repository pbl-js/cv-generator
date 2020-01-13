import styled from "styled-components";
import Box from "./Box";

// Avaible Props:
const BackgroundLayer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  margin: 0;
  height: 100%;
  overflow-y: scroll;
  border-radius: 0;
`;

export default BackgroundLayer;
