import React, { createContext, useReducer } from "react";
import { cvdataReducer } from "reducers/bookReducer"; // <--------

export const BookContext = createContext();

const CVdataContext = props => {
  const [cvdata, dispatch] = useReducer(cvdataReducer, []);

  return (
    <CVdataContext.Provider value={{ cvdata, dispatch }}>
      {props.children}
    </CVdataContext.Provider>
  );
};

export default CVdataContext;
