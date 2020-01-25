import uuid from "uuid/v1";
import {
  ADD_SCHOOL,
  DELETE_SCHOOL,
  EDIT_SCHOOL,
  ADD_SKILL,
  DELETE_SKILL,
  ADD_EXPERIENCE,
  EDIT_EXPERIENCE,
  DELETE_EXPERIENCE,
  SET_ABOUTME,
  SET_CONTACT
} from "actions/actionTypes";

export const cvdataReducer = (state, action) => {
  switch (action.type) {
    case SET_CONTACT:
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.name]: [action.value]
        }
      };
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
            item.id === action.id ? { id: action.id, ...action.schoolItem } : item
          )
        }
      };
    case ADD_SKILL:
      return {
        ...state,
        skills: {
          ...state.skillls,
          items: [...state.skills.items, { ...action.skillItem, id: uuid() }]
        }
      };
    case DELETE_SKILL:
      return {
        ...state,
        skills: {
          ...state.skillls,
          items: [...state.skills.items.filter(item => item.id !== action.id)]
        }
      };
    case ADD_EXPERIENCE:
      return {
        ...state,
        experience: {
          ...state.experience,
          items: [
            ...state.experience.items,
            {
              id: uuid(),
              ...action.experienceItem
            }
          ]
        }
      };
    case EDIT_EXPERIENCE:
      return {
        ...state,
        experience: {
          ...state.experience,
          items: state.experience.items.map(item =>
            item.id === action.id ? { id: action.id, ...action.experienceItem } : item
          )
        }
      };
    case DELETE_EXPERIENCE:
      return {
        ...state,
        experience: {
          ...state.experience,
          items: [...state.experience.items.filter(item => item.id !== action.id)]
        }
      };
    case SET_ABOUTME:
      return {
        ...state,
        aboutMe: {
          ...state.aboutMe,
          text: action.text
        }
      };
    default:
      return state;
  }
};
