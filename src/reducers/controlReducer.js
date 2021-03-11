import produce from 'immer';
import * as ACTION_TYPES from '../actionTypes/control';
import { DEFAULT_LANGUAGE } from '../utils/constants';

const initialState = {
  searchValue: '',
  applicationLanguage: DEFAULT_LANGUAGE,
  isAuthorized: false,
  currentLang: 'en',
  timeDifference: -660,
  currentCountry: 'Australia',
  fullName: 'Australia',
  capital: 'Canberra',
  description: "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. Its population of nearly 26 million is highly urbanised and heavily concentrated on the eastern seaboard. Australia's capital is Canberra, and its largest city is Sydney. The country's other major metropolitan areas are Melbourne, Brisbane, Perth, and Adelaide.",
};

const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_COUNTRY_CONFIG:
      return produce(state, (draft) => {
        draft.timeDifference = action.country.timeDifference;
        draft.currentCountry = action.country.shortName;
        draft.fullName = action.country.name;
        draft.capital = action.country.capital;
        draft.description = action.country.description;
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
