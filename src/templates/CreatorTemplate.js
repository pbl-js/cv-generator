import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { creatorRoutes } from "../routes/routes";

import Navigation from "../components/organisms/Navigation";
import MobileNavigation from "../components/organisms/MobileNavigation";

const StyledWrapper = styled.div`
  padding: 0 10px 10px 10px;
  max-width: 850px;
  margin: 0 auto;
`;

const CreatorTemplate = ({ history, location, children }) => {
  const [progressData, setProgressData] = useState({
    progress: 1
  });

  // Pobieranie indexu tablicy z listą podstron kreatora
  const index = creatorRoutes.map(x => x.url).indexOf(location.pathname);

  // Ustawienie zmiennej stanu "progress" na aktualną po odświeżeniu strony
  useEffect(() => {
    setProgressData({
      progress: index + 1
    });
  }, []);

  //Ten efekt ustawia adres url w oparciu o zmienną stanu "progress"
  useEffect(() => {
    history.push(creatorRoutes[progressData.progress - 1].url);
  }, [progressData]);

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
        actualPage={creatorRoutes[index].name}
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