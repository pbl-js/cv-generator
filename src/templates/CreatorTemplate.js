import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { creatorRoutes, routes } from "../routes/routes";

import Navigation from "../components/organisms/Navigation";
import MobileNavigation from "../components/organisms/MobileNavigation";

const StyledWrapper = styled.div`
  padding: 20px;
  max-width: 850px;
  margin: 0 auto;
`;

const CreatorTemplate = ({ history, location, children }) => {
  const [progressData, setProgressData] = useState({
    progress: 1
  });

  useEffect(() => {
    if (location.pathname === routes.personData) {
      setProgressData({
        progress: 1
      });
    } else if (location.pathname === routes.education) {
      setProgressData({
        progress: 2
      });
    } else if (location.pathname === routes.experience) {
      setProgressData({
        progress: 3
      });
    } else if (location.pathname === routes.template) {
      setProgressData({
        progress: 4
      });
    } else if (location.pathname === routes.generateCv) {
      setProgressData({
        progress: 5
      });
    }
  }, []);

  useEffect(() => {
    history.push(creatorRoutes[progressData.progress - 1]);
    console.log(progressData.progress);
  }, [progressData.progress]);

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
      {children}
      <MobileNavigation
        progressData={progressData}
        handlePageChange={handlePageChange}
      />
    </StyledWrapper>
  );
};

export default withRouter(CreatorTemplate);
