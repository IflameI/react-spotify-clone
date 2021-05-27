export enum browseActionType {
  FETCH_BROWSE_SUCCESS = 'FETCH_BROWSE_SUCCESS',
  FETCH_BROWSE_ERROR = 'FETCH_BROWSE_ERROR',
  SET_LOADED = 'SET_LOADED',
}

export interface setLoadedActionType {
  type: browseActionType.SET_LOADED;
  payload: boolean;
}

export interface fetchBrowseSuccess {
  type: browseActionType.FETCH_BROWSE_SUCCESS;
  browse: any;
}
export interface fetchBrowseError {
  type: browseActionType.FETCH_BROWSE_ERROR;
}

export type browseActions = setLoadedActionType | fetchBrowseSuccess | fetchBrowseError;
