import uuid from "uuid/v1";
import { ADD_PERSON_DATA } from "actions/actionTypes";

export const cvdataReducer = (state, action) => {
  switch (action.type) {
    case ADD_PERSON_DATA:
      return [...state];
    default:
      return state;
  }
};
