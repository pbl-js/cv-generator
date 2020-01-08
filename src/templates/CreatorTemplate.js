import React, { useState } from "react";
import styled from "styled-components";

import Navigation from "../components/organisms/Navigation";

const StyledWrapper = styled.div`
  padding: 20px;
`;

const CreatorTemplate = props => {
  const [progressData, setProgressData] = useState({
    progress: 1
  });

  const handlePageChange = value => {
    setProgressData({
      progress: value
    });
  };

  return (
    <StyledWrapper>
      <Navigation
        progressData={progressData}
        handlePageChange={handlePageChange}
      />

      {props.children}
    </StyledWrapper>
  );
};

export default CreatorTemplate;
