export enum artistsActionType {
  FETCH_ARTISTS_PENDING = 'FETCH_ARTISTS_PENDING',
  FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS',
  SET_ARTIST_IDS = 'SET_ARTIST_IDS',
  FETCH_ARTIST_SONGS_PENDING = 'FETCH_ARTIST_SONGS_PENDING',
  FETCH_ARTIST_SONGS_SUCCESS = 'FETCH_ARTIST_SONGS_SUCCESS',
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

interface fetchArtistSongsPendingType {
  type: artistsActionType.FETCH_ARTIST_SONGS_PENDING;
}
interface fetchArtistSongsSuccessType {
  type: artistsActionType.FETCH_ARTIST_SONGS_SUCCESS;
  payload: any;
}

export type artistsActions =
  | setArtistIdActionType
  | fetchPendingartistsActionType
  | fetchArtistsSuccessType
  | fetchArtistSongsPendingType
  | fetchArtistSongsSuccessType;
