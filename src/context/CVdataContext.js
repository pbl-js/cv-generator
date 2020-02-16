import React, { createContext, useReducer, useEffect } from "react";
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
    phone: "999555222",
    email: "jondoe@gmail.com",
    website: "www.jondoe.pl"
  },
  schools: {
    customTitle: "",
    hide: false,
    break: false,
    items: [
      {
        id: 1,
        educationLevel: "Inżynier",
        schoolName: "Wyższa szkoła ekonomii i innowacji",
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
      { id: 2, title: "CSS" }
    ]
  },
  experience: {
    customTitle: "",
    hide: false,
    break: false,
    items: [
      {
        id: 1,
        position: "Test",
        company: "TEST Company",
        city: "TestCity",
        start: 2013,
        end: 2019,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      }
    ]
  },
  aboutMe: {
    customTitle: "",
    hide: false,
    break: false,
    text: ""
  }
};

const CVdataContextProvider = props => {
  const [cvdata, dispatch] = useReducer(cvdataReducer, initialState, () => {
    const localData = localStorage.getItem("cvdata");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("cvdata", JSON.stringify(cvdata));
  }, [cvdata]);

  return (
    <CVdataContext.Provider value={{ cvdata, dispatch }}>
      {props.children}
    </CVdataContext.Provider>
  );
};

export default CVdataContextProvider;
