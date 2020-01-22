import uuid from "uuid/v1";
import { ADD_SCHOOL } from "actions/actionTypes";

export const cvdataReducer = (state, action) => {
  switch (action.type) {
    case ADD_SCHOOL:
      return {
        ...state,
        schools: {
          ...state.schools,
          items: [
            ...state.schools.items,
            {
              id: uuid(),
              ...action.schoolItem
            }
          ]
          // items: [...state.items.push(action.schoolItem)]
        }
      };
    default:
      return state;
  }
};
