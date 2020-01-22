import uuid from "uuid/v1";
import { ADD_SCHOOL, DELETE_SCHOOL } from "actions/actionTypes";

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
        }
      };
    case DELETE_SCHOOL:
      return {
        state,
        schools: {
          ...state.schools,
          items: [...state.schools.items.filter(item => item.id !== action.id)]
        }
      };
    default:
      return state;
  }
};
