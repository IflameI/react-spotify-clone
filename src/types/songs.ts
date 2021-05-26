export enum songsActionType {
  FETCH_SONGS_PENDING = 'FETCH_SONGS_PENDING',
  FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS',
  FETCH_SONGS_ERROR = 'FETCH_SONGS_ERROR',
  FETCH_ARTIST_SONGS_PENDING = 'FETCH_ARTIST_SONGS_PENDING',
  FETCH_ARTIST_SONGS_SUCCESS = 'FETCH_ARTIST_SONGS_SUCCESS',
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

interface fetchArtistSongsPendingType {
  type: songsActionType.FETCH_ARTIST_SONGS_PENDING;
}
interface fetchArtistSongsSuccessType {
  type: songsActionType.FETCH_ARTIST_SONGS_SUCCESS;
  payload: any;
}

export type SongActions =
  | fetchSongsPendingType
  | fetchSongsSuccessType
  | fetchSongsErrorType
  | fetchArtistSongsPendingType
  | fetchArtistSongsSuccessType;
