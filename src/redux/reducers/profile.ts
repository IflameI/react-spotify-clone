/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { profileActions, profileActionType } from '../../types/profile';

const initialState = {
  isLoaded: false,
  fetchUserError: false,
  user: {
    display_name: '',
  },
};

type StateType = {
  isLoaded: boolean,
  fetchUserError:boolean,
  user:any,
  id?:string,
  display_name?: string,
};


const profile = (state = initialState, action: profileActions): StateType => {
  switch (action.type) {
    case profileActionType.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case profileActionType.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        fetchUserError: false,
      };
    case profileActionType.FETCH_USER_ERROR:
      return {
        ...state,
        fetchUserError: true,
      };
    default:
      return state;
  }
};

export default profile;
