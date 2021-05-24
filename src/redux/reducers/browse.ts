/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { browseActionType,browseActions } from '../../types/browse';

const initialState = {
  view: [],
  isLoaded:false,
};
type initialStateType = typeof initialState;

const browse = (state = initialState, action: browseActions): initialStateType => {
  switch (action.type) {
    case browseActionType.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        view: action.categories.items,
        isLoaded:true,

      };
    case browseActionType.FETCH_GENRES_ERROR:
      return {
        ...state,
        isLoaded:false,

      };
    case browseActionType.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        view: action.newReleases.items,
        isLoaded:true,

      };
    case browseActionType.FETCH_NEW_RELEASES_ERROR:
      return {
        ...state,
        isLoaded:false,

      };
    case browseActionType.FETCH_FEATURED_SUCCESS:
      return {
        ...state,
        view: action.featured.items,
        isLoaded:true,

      };
    case browseActionType.FETCH_FEATURED_ERROR:
      return {
        ...state,
        isLoaded:false,

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
