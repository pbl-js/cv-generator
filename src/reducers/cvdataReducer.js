import uuid from "uuid/v1";
import { ADD_SCHOOL, DELETE_SCHOOL, EDIT_SCHOOL } from "actions/actionTypes";

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
        ...state,
        schools: {
          ...state.schools,
          items: [...state.schools.items.filter(item => item.id !== action.id)]
        }
      };
    case EDIT_SCHOOL:
      return {
        ...state,
        schools: {
          ...state.schools,
          items: state.schools.items.map(item =>
            item.id === action.id
              ? { id: action.id, ...action.schoolItem }
              : item
          )
        }
      };
    default:
      return state;
  }
};
