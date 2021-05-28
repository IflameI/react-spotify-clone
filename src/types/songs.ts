export enum songsActionType {
  FETCH_SONGS_PENDING = 'FETCH_SONGS_PENDING',
  FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS',
  FETCH_SONGS_ERROR = 'FETCH_SONGS_ERROR',
  SEARCH_SONGS_PENDING = 'SEARCH_SONGS_PENDING',
  SEARCH_SONGS_SUCCESS = 'SEARCH_SONGS_SUCCESS',
  SEARCH_SONGS_ERROR = 'SEARCH_SONGS_ERROR',
}
interface fetchSongsPendingType {
  type: songsActionType.FETCH_SONGS_PENDING;
}

interface fetchSongsSuccessType {
  type: songsActionType.FETCH_SONGS_SUCCESS;
  payload: any;
}
interface fetchSongsErrorType {
  type: songsActionType.FETCH_SONGS_ERROR;
}

export interface searchPendingActionType {
  type: songsActionType.SEARCH_SONGS_PENDING;
}

export interface searchSuccessActionType {
  type: songsActionType.SEARCH_SONGS_SUCCESS;
  payload: any;
}
export interface searchErrorActionType {
  type: songsActionType.SEARCH_SONGS_ERROR;
}

export type SongActions =
  | fetchSongsPendingType
  | fetchSongsSuccessType
  | fetchSongsErrorType
  | searchPendingActionType
  | searchSuccessActionType
  | searchErrorActionType;
