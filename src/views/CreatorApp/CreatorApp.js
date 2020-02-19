import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { routes } from "routes/routes";
import { creatorRoutes } from "routes/routes";

import CVdataContextProvider from "context/CVdataContext";

import CreatorTemplate from "templates/CreatorTemplate";
import Navigation from "components/organisms/Navigation";
import MobileNavigation from "components/organisms/MobileNavigation";
import PreviewIcon from "components/atoms/PreviewIcon";
import ShowCvPopUp from "templates/ShowCvPopUp";
import withPopUp from "hoc/withPopup";

import PersonData from "views/PersonData/PersonData";
import Education from "views/Education/Education";
import Experience from "views/Experience/Experience";
import Template from "views/Template";
import Download from "views/Download";

const CreatorApp = ({ isOpen, handlePopupShow }) => {
  let history = useHistory();
  let location = useLocation();

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
    <CVdataContextProvider>
      <CreatorTemplate>
        <Navigation
          progressData={progressData}
          handlePageChange={handlePageChange}
          actualPage={creatorRoutes[index].name}
        />

        <Switch>
          <Route path={routes.personData} component={PersonData} />
          <Route path={routes.education} component={Education} />
          <Route path={routes.experience} component={Experience} />
          <Route path={routes.template} component={Template} />
          <Route path={routes.generateCv} component={Download} />
        </Switch>

        <MobileNavigation
          progressData={progressData}
          handlePageChange={handlePageChange}
          lastPage={creatorRoutes.length}
        />

        {progressData.progress < 5 && <PreviewIcon onClick={handlePopupShow} />}
        {isOpen && <ShowCvPopUp handlePopupShow={handlePopupShow} />}
      </CreatorTemplate>
    </CVdataContextProvider>
  );
};

export default withPopUp(CreatorApp);
