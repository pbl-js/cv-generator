import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./theme/GlobalStyle";
import PdfGenerator from "./components/pdfGenerator/PdfGenerator";

const theme = {
  primary: "black"
};

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          {/* <h1>Working</h1>
          <Button width="500px">Siema</Button>
          <Button secondary>Siema</Button> */}
          <PdfGenerator />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
