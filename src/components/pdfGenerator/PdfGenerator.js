import React, { PureComponent } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PropTypes from "prop-types";

import TemplateHarvard from "cv-templates/template1";

class PdfGenerator extends PureComponent {
  render() {
    return (
      <div>
        <PDFViewer width="100%" height="500px">
          <TemplateHarvard data={this.props} />
        </PDFViewer>
        <div>
          {/* <PDFDownloadLink
            document={<TemplateHarvard data={this.props} />}
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : <button>Download</button>
            }
          </PDFDownloadLink> */}
        </div>
      </div>
    );
  }
}

PdfGenerator.propTypes = {
  mainInfo: PropTypes.shape({
    photo: PropTypes.any,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    job: PropTypes.string
  }),
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf(["phone", "email", "home"]).isRequired,
      body: PropTypes.string.isRequired
    })
  ),
  education: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      degree: PropTypes.string.isRequired,
      academy: PropTypes.string.isRequired,
      years: PropTypes.arrayOf([PropTypes.number])
    })
  ),
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  aboutMe: PropTypes.string,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      position: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      city: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default PdfGenerator;
