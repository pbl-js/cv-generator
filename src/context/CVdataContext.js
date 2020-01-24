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
  contact: [],
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
    items: []
  },
  experience: {
    customTitle: "",
    hide: false,
    break: false,
    items: []
  },
  aboutMe: {
    customTitle: "",
    hide: false,
    break: false,
    text: ""
  }
};

const CVdataContextProvider = props => {
  const [cvdata, dispatch] = useReducer(cvdataReducer, initialState);

  return <CVdataContext.Provider value={{ cvdata, dispatch }}>{props.children}</CVdataContext.Provider>;
};

export default CVdataContextProvider;
