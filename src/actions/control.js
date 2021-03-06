import { INC_VARIABLE, DEC_VARIABLE, SET_COUNTRY_CONFIG } from "../actionTypes/control";

export const incVariable = () => ({ type: INC_VARIABLE });
export const decVariable = () => ({ type: DEC_VARIABLE });
export const setCountryConfig = (country) => ({ type: SET_COUNTRY_CONFIG, country });
