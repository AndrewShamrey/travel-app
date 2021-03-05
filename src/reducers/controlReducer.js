import produce from "immer";
import * as ACTION_TYPES from "../actionTypes/control";
import { EXAMPLE_CONST } from "../utils/constants";

const initialState = {
  variable: EXAMPLE_CONST,
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
    default:
      return state;
  }
};

export default controlReducer;
