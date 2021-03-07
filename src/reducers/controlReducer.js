import produce from "immer";
import * as ACTION_TYPES from "../actionTypes/control";
import { DEFAULT_LANGUAGE, EXAMPLE_CONST } from "../utils/constants";

const initialState = {
  variable: EXAMPLE_CONST,
  searchValue: '',
  applicationLanguage: DEFAULT_LANGUAGE,
};

const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INC_VARIABLE:
      return produce(state, (draft) => {
        draft.variable += 1;
      });
    case ACTION_TYPES.DEC_VARIABLE:
      return produce(state, (draft) => {
        draft.variable -= 1;
      });
    case ACTION_TYPES.SET_SEARCH_VALUE: 
      return produce(state, (draft) => {
        draft.searchValue = action.payload;
      });
    case ACTION_TYPES.SET_APPLICATION_LANGUAGE: 
      return produce(state, (draft) => {
        draft.applicationLanguage = action.payload;
      });
    default:
      return state;
  }
};

export default controlReducer;
