import React from "react";
import styled from "styled-components";
import BackgroundLayer from "../atoms/BackgroundLayer";

import purpleUp from "../../assets/images/purpleUp.svg";
import purpleUnder from "../../assets/images/purpleUnder.svg";

const Wrapper = styled.div`
  height: 510px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
`;

const PurpleBackground = () => {
  return (
    <Wrapper>
      <BackgroundLayer src={purpleUnder} />
      <BackgroundLayer up src={purpleUp} />
    </Wrapper>
  );
};

export default PurpleBackground;
