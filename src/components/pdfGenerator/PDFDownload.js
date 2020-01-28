import React, { PureComponent } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import TemplateHarvard from "cv-templates/template1";
import Button from "components/atoms/Button";

import { CVdataContext } from "context/CVdataContext";

class PDFDownload extends PureComponent {
  static contextType = CVdataContext;
  render() {
    return (
      <PDFDownloadLink
        document={<TemplateHarvard data={this.context.cvdata} />}
        fileName="somename.pdf"
        style={{ textDecoration: "none" }}
      >
        {({ blob, url, loading, error }) => (loading ? "Loading document..." : <Button>Download</Button>)}
      </PDFDownloadLink>
    );
  }
}

export default PDFDownload;
