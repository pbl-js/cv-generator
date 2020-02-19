import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "routes/routes";
import { theme } from "theme/mainTheme";
import GlobalStyle from "theme/GlobalStyle";

import MainTemplate from "templates/MainTemplate";
import LandingPage from "views/LandingPage";
import CreatorApp from "views/CreatorApp/CreatorApp";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} component={LandingPage} />
              <Route path={routes.app} component={CreatorApp} />
            </Switch>
          </MainTemplate>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
