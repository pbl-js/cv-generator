import React, { PureComponent } from "react";
import TemplateHarvard from "../../cv-templates/template1";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

export default class PdfGenerator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      personData: {
        photo: "dasdasd",
        name: "Paweł",
        surname: "Miłczak",
        job: "Frontend developer"
      },
      contacts: [
        { type: "phone", body: "+48 797 792 613" },
        { type: "email", body: "jogobello4@gmail.com" },
        { type: "home", body: "www.pawelmilczak.com" }
      ],
      educations: [
        {
          degree: "Technik informatyk",
          academy: "Zespół szkół nr 1 im. Władysława Grabskiego w Lublinie",
          years: [2014, 2018]
        },
        {
          degree: "Technik informatyk",
          academy: "Wyzsza Szkoła Ekonomii i Innowacji w Lublinie",
          years: [2014, 2018]
        }
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Express.js",
        "MongoDB"
      ],
      aboutMe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      experiences: [
        {
          position: "własnna działalność gospodarcza",
          company: "Własna działalność gospodarcza",
          city: "Lublin",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          position: "własnna działalność gospodarcza",
          company: "Własna działalność gospodarcza",
          city: "Lublin",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary">Generate CV</button>
        {/* <PDFViewer width="500px" height="750px">
          <TemplateHarvard data={this.state} />
        </PDFViewer> */}
        <div>
          <PDFDownloadLink
            document={<TemplateHarvard data={this.state} />}
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div>
      </div>
    );
  }
}
