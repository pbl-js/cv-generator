import styled from "styled-components";
// import Background from "../../assets/images/under.svg";

// Avaible Props: white secondary
const BackgroundLayer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ up }) => (up ? "-1" : "-2")};
  height: ${({ up }) => (up ? "85%" : "90%")};
`;

export default BackgroundLayer;
