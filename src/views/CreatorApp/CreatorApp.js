import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "routes/routes";

import CVdataContextProvider from "context/CVdataContext";

import CreatorTemplate from "templates/CreatorTemplate";
import PersonData from "views/PersonData/PersonData";
import Education from "views/Education/Education";
import Experience from "views/Experience/Experience";
import Template from "views/Template";
import Download from "views/Download";

const CreatorApp = () => {
  return (
    <CVdataContextProvider>
      <CreatorTemplate>
        <Switch>
          <Route path={routes.personData} component={PersonData} />
          <Route path={routes.education} component={Education} />
          <Route path={routes.experience} component={Experience} />
          <Route path={routes.template} component={Template} />
          <Route path={routes.generateCv} component={Download} />
        </Switch>
      </CreatorTemplate>
    </CVdataContextProvider>
  );
};

export default CreatorApp;
