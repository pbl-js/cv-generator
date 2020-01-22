import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "routes/routes";
import { theme } from "theme/mainTheme";
import GlobalStyle from "theme/GlobalStyle";

import MainTemplate from "templates/MainTemplate";
import CreatorTemplate from "templates/CreatorTemplate";
import LandingPage from "views/LandingPage";

import PersonData from "views/personData/PersonData";
import Education from "views/education/Education";
import Experience from "views/experience/Experience";
import Template from "views/Template";
import Download from "views/Download";

import { Provider } from "react-redux";
import store from "redux/store/";

import CVdataContextProvider from "context/CVdataContext";

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router>
            <MainTemplate>
              <Switch>
                <Route exact path={routes.home} component={LandingPage} />
                <CreatorTemplate>
                  <CVdataContextProvider>
                    <Route path={routes.personData} component={PersonData} />
                    <Route path={routes.education} component={Education} />
                    <Route path={routes.experience} component={Experience} />
                    <Route path={routes.template} component={Template} />
                    <Route path={routes.generateCv} component={Download} />
                  </CVdataContextProvider>
                </CreatorTemplate>
              </Switch>
            </MainTemplate>
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
