import { 
  SET_SEARCH_VALUE,
  SET_APPLICATION_LANGUAGE,
  SET_COUNTRY_CONFIG,
  SET_CURRENT_PERSON,
  SET_IS_AUTHORIZED
} from '../actionTypes/control';

export const setSearchValue = (value) => ({ type: SET_SEARCH_VALUE, payload: value });
export const setApplicationLanguage = (value) => ({ type: SET_APPLICATION_LANGUAGE, payload: value });
export const setCountryConfig = (country) => ({ type: SET_COUNTRY_CONFIG, country });
export const setCurrentPerson = (person) => ({ type: SET_CURRENT_PERSON, person });
export const setIsAuthorized = (isAuthorized) => ({ type: SET_IS_AUTHORIZED, payload: isAuthorized });
