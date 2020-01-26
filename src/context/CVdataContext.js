import React, { createContext, useReducer } from "react";
import { cvdataReducer } from "reducers/cvdataReducer"; // <--------

export const CVdataContext = createContext();

const initialState = {
  template: "harvard",
  personData: {
    photo: "",
    name: "",
    surname: "",
    position: ""
  },
  contact: {
    phone: "797792613",
    email: "jogobello4@gmail.com",
    website: "www.pablo.pl"
  },
  schools: {
    customTitle: "",
    hide: false,
    break: false,
    items: [
      {
        id: 1,
        educationLevel: "Inżynier",
        schoolName: "Wyższa szkoła ekonomii i innowacji w lublinie",
        specialization: "Programowanie i technologie web",
        start: 2014,
        end: 2019,
        current: false
      }
    ]
  },
  skills: {
    customTitle: "",
    hide: false,
    break: false,
    items: [
      { id: 1, title: "JavaScipt" },
      { id: 2, title: "PHP" }
    ]
  },
  experience: {
    customTitle: "",
    hide: false,
    break: false,
    items: [
      {
        id: 1,
        position: "Własna działalność gospodarcza",
        company: "PABLO Company",
        city: "Lublin",
        start: 2013,
        end: 2019,
        description:
          "Prowadzenie sklepu internetowego. Konfiguracja kampanii reklamowych na platformach: Youtube, Facebook, Google. Przygotowywanie materiałów promocyjnych, w tym: animacje reklamowe (AfterEffect, Blender, Photoshop), posty graficzne na potrzeby portali społecznościowych, grafika reklamowa."
      }
    ]
  },
  aboutMe: {
    customTitle: "",
    hide: false,
    break: false,
    text: "gsdfgsdf"
  }
};

const CVdataContextProvider = props => {
  const [cvdata, dispatch] = useReducer(cvdataReducer, initialState);

  return <CVdataContext.Provider value={{ cvdata, dispatch }}>{props.children}</CVdataContext.Provider>;
};

export default CVdataContextProvider;
