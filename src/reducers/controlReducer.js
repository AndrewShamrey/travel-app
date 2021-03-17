import produce from 'immer';
import * as ACTION_TYPES from '../actionTypes/control';
import DEFAULT_COUNTRY_CONFIG from '../utils/defCountry';
import { DEFAULT_LANGUAGE } from '../utils/constants';

const initialState = {
  searchValue: '',
  applicationLanguage: DEFAULT_LANGUAGE,
  countryConfig: DEFAULT_COUNTRY_CONFIG,
  currentPlaces: [],
  isAuthorized: false,
  currentPerson: null,
};

const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_COUNTRY_CONFIG:
      return produce(state, (draft) => {
        draft.countryConfig = action.country;
      });
    case ACTION_TYPES.SET_CURRENT_PERSON:
      return produce(state, (draft) => {
        draft.currentPerson = action.person;
      });
    case ACTION_TYPES.SET_PLACES_BY_COUNTRY:
      return produce(state, (draft) => {
        draft.currentPlaces = action.places;
      });
    case ACTION_TYPES.SET_PREV_STATE:
      return produce(state, (draft) => {
        draft.applicationLanguage = action.prevState.applicationLanguage;
        draft.countryConfig = action.prevState.countryConfig;
        draft.currentPlaces = action.prevState.currentPlaces;
        draft.isAuthorized = action.prevState.isAuthorized;
        draft.currentPerson = action.prevState.currentPerson;
      });
    case ACTION_TYPES.SET_SEARCH_VALUE:
      return produce(state, (draft) => {
        draft.searchValue = action.payload;
      });
    case ACTION_TYPES.SET_APPLICATION_LANGUAGE:
      return produce(state, (draft) => {
        draft.applicationLanguage = action.payload;
      });
    case ACTION_TYPES.SET_IS_AUTHORIZED:
      return produce(state, (draft) => {
        draft.isAuthorized = action.payload;
      });
    default:
      return state;
  }
};

export default controlReducer;
