import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "theme/BreakPoints";
import { withRouter } from "react-router";
import { creatorRoutes } from "../routes/routes";

import withPopUp from "hoc/withPopup";
import ShowCvPopUp from "templates/ShowCvPopUp";
import Navigation from "components/organisms/Navigation";
import MobileNavigation from "components/organisms/MobileNavigation";
import PreviewIcon from "components/atoms/PreviewIcon";

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

const CreatorTemplate = ({
  history,
  location,
  children,
  handlePopupShow,
  isOpen
}) => {
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

      {progressData.progress < 5 && <PreviewIcon onClick={handlePopupShow} />}
      {isOpen && <ShowCvPopUp handlePopupShow={handlePopupShow} />}
      <ColorBackground />
    </StyledWrapper>
  );
};

export default withRouter(withPopUp(CreatorTemplate));
