import React, { createContext, useReducer } from "react";
import { cvdataReducer } from "reducers/cvdataReducer"; // <--------

export const CVdataContext = createContext();

const CVdataContextProvider = props => {
  const [cvdata, dispatch] = useReducer(cvdataReducer, {
    template: "harvard",
    personData: {
      name: "Paweł",
      surname: "Miłczak",
      position: "FrontEnd Developer"
    }
  });

  return (
    <CVdataContext.Provider value={{ cvdata, dispatch }}>
      {props.children}
    </CVdataContext.Provider>
  );
};

export default CVdataContextProvider;
