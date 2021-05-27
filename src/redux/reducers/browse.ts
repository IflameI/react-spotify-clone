/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { browseActionType, browseActions } from '../../types/browse';

const initialState = {
  view: [],
  isLoaded: false,
};

type initialStateType = typeof initialState;

const browse = (state = initialState, action: browseActions): initialStateType => {
  switch (action.type) {
    case browseActionType.FETCH_BROWSE_SUCCESS:
      return {
        ...state,
        view: action.browse.items,
        isLoaded: true,
      };
    case browseActionType.FETCH_BROWSE_ERROR:
      return {
        ...state,
        isLoaded: false,
      };
    case browseActionType.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default browse;
