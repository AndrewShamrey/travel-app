import { 
  INC_VARIABLE,
  DEC_VARIABLE,
  SET_SEARCH_VALUE,
  SET_APPLICATION_LANGUAGE
} from "../actionTypes/control";

export const incVariable = () => ({ type: INC_VARIABLE });
export const decVariable = () => ({ type: DEC_VARIABLE });
export const setSearchValue = (value) => ({ type: SET_SEARCH_VALUE, payload: value });
export const setApplicationLanguage = (value) => (
  { type: SET_APPLICATION_LANGUAGE, payload: value }
);