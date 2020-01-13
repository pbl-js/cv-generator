import styled from "styled-components";

// Avaible Props: secondary(blue)
const InfoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  line-height: 150%;
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

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  svg:last-of-type {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 50px;
    top: 20px;
  }
`;

export default InfoBox;
