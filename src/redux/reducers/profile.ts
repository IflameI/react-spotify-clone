/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { actionsType } from '../actions/profile';
const initialState = {
  isLoaded: false,
  fetchUserError: false,
  user: {},
};
type initialStateType = typeof initialState;

const profile = (state = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        fetchUserError: false,
      };
    case 'FETCH_USER_ERROR':
      return {
        ...state,
        fetchUserError: true,
      };
    default:
      return state;
  }
};

export default profile;
