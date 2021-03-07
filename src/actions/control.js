import { 
  SET_SEARCH_VALUE,
  SET_APPLICATION_LANGUAGE,
  SET_COUNTRY_CONFIG,
} from "../actionTypes/control";

export const setSearchValue = (value) => ({ type: SET_SEARCH_VALUE, payload: value });
export const setApplicationLanguage = (value) => (
  { type: SET_APPLICATION_LANGUAGE, payload: value }
);
export const setCountryConfig = (country) => ({ type: SET_COUNTRY_CONFIG, country });
