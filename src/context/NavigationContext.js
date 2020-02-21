import React, { createContext, useReducer, useEffect } from "react";
import { cvdataReducer } from "reducers/cvdataReducer"; // <--------

export const CVdataContext = createContext();

const CVdataContextProvider = props => {
  return (
    <CVdataContext.Provider value={{ cvdata, dispatch }}>
      {props.children}
    </CVdataContext.Provider>
  );
};

export default CVdataContextProvider;
