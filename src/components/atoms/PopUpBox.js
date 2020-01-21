import styled from "styled-components";
import Box from "components/atoms/Box";

// Avaible Props:
const PopUpBox = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 850px;
  z-index: 999;
  margin: 0;
  height: 100%;
  overflow-y: scroll;
  border-radius: 0;
`;

export default PopUpBox;
