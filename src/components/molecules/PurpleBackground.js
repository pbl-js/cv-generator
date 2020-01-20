import React from "react";
import styled from "styled-components";
import BackgroundLayer from "components/atoms/BackgroundLayer";

import purpleUp from "assets/images/purpleUp.svg";
import purpleUnder from "assets/images/purpleUnder.svg";

const Wrapper = styled.div`
  height: 510px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
  @media (min-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    height: 550px;
  }

  @media (min-width: 1280px) {
    height: 600px;
  }

  @media (min-width: 1980px) {
    height: 650px;
  }

  @media (min-width: 2400px) {
    height: 700px;
  }

  @media (min-width: 3000px) {
    height: 750px;
  }
`;

const SafeBox = styled.div`
  background-color: ${({ theme }) => theme.color.darkPurple};
  width: 100%;
  height: 235px;
  z-index: -3;
  position: absolute;
`;

const PurpleBackground = () => {
  return (
    <Wrapper>
      <SafeBox />
      <BackgroundLayer src={purpleUnder} />
      <BackgroundLayer up src={purpleUp} />
    </Wrapper>
  );
};

export default PurpleBackground;
