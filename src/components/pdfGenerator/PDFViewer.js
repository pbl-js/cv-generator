import React, { PureComponent } from "react";
import { PDFViewer as Viewer } from "@react-pdf/renderer";

import { CVdataContext } from "context/CVdataContext";

import TemplateHarvard from "cv-templates/template1";

class PDFViewer extends PureComponent {
  static contextType = CVdataContext;

  render() {
    return (
      <Viewer width="100%" height="500px">
        <TemplateHarvard data={this.context.cvdata} />
      </Viewer>
    );
  }
}

export default PDFViewer;
