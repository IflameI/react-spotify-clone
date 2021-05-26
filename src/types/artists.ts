export enum artistsActionType {
  FETCH_ARTISTS_PENDING = 'FETCH_ARTISTS_PENDING',
  FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS',
  SET_ARTIST_IDS = 'SET_ARTIST_IDS',
}

export interface setArtistIdActionType {
  type: artistsActionType.SET_ARTIST_IDS;
  payload: any;
}

export interface fetchPendingartistsActionType {
  type: artistsActionType.FETCH_ARTISTS_PENDING;
}

export interface fetchArtistsSuccessType {
  type: artistsActionType.FETCH_ARTISTS_SUCCESS;
  payload: any;
}

export type artistsActions =
  | setArtistIdActionType
  | fetchPendingartistsActionType
  | fetchArtistsSuccessType;
