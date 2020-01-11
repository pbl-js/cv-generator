import styled from "styled-components";

// Avaible Props: secondary(blue)
const InfoBox = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${({ theme, color }) => {
    switch (color) {
      case "blue":
        return theme.color.lightBlue;
      case "orange":
        return theme.color.lightOrange;
      default:
        return theme.color.lightGray;
    }
  }};
  color: ${({ theme, color }) => {
    switch (color) {
      case "blue":
        return theme.color.darkBlue;
      case "orange":
        return theme.color.darkOrange;
      default:
        return theme.color.darkGray;
    }
  }};
`;

export default InfoBox;
