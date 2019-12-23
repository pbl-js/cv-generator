import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./theme/GlobalStyle";
import PdfGenerator from "./components/pdfGenerator/PdfGenerator";
import MainDataPicker from "./components/organisms/MainDataPicker";

import { Provider } from "react-redux";
import store from "./redux/store/";

const theme = {
  primary: "black"
};

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <h1>Hello world</h1>
            <MainDataPicker />
            <PdfGenerator />
          </>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
