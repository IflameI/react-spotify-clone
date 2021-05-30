export enum songsActionType {
  FETCH_SONGS_PENDING = 'FETCH_SONGS_PENDING',
  FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS',
  FETCH_SONGS_ERROR = 'FETCH_SONGS_ERROR',
  SEARCH_SONGS_PENDING = 'SEARCH_SONGS_PENDING',
  SEARCH_SONGS_SUCCESS = 'SEARCH_SONGS_SUCCESS',
  SEARCH_SONGS_ERROR = 'SEARCH_SONGS_ERROR',
  PLAY_SONG = 'PLAY_SONG',
  STOP_SONG = 'STOP_SONG',
  PAUSE_SONG = 'PAUSE_SONG',
  RESUME_SONG = 'RESUME_SONG',
  INCREASE_SONG_TIME = 'INCREASE_SONG_TIME',
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

export interface playSongsActionType {
  type: songsActionType.PLAY_SONG;
  payload: any;
}

export interface pauseSongActionType {
  type: songsActionType.PAUSE_SONG;
}

export interface stopSongActionType {
  type: songsActionType.STOP_SONG;
}

export interface resumeSongActionType {
  type: songsActionType.RESUME_SONG;
}

export type SongActions =
  | fetchSongsPendingType
  | fetchSongsSuccessType
  | fetchSongsErrorType
  | searchPendingActionType
  | searchSuccessActionType
  | searchErrorActionType
  | playSongsActionType
  | pauseSongActionType
  | stopSongActionType
  | resumeSongActionType;
