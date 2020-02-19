import React, { useEffect } from "react";
import styled from "styled-components";
import { device } from "theme/BreakPoints";

const StyledWrapper = styled.div`
  max-width: 850px;
  margin: 0 20px;
  padding-bottom: 50px;
`;

const ColorBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50vh;
  background: linear-gradient(90deg, #483886 0%, #5b4ab6 100%);
  z-index: -1;

  @media ${device.tablet} {
    height: 30vh;
  }
`;

const CreatorTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      {children}
      <ColorBackground />
    </StyledWrapper>
  );
};

export default CreatorTemplate;
