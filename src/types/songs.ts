
export enum songsActionType {
    FETCH_SONGS_PENDING = 'FETCH_SONGS_PENDING',
    FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS',
    FETCH_SONGS_ERROR = 'FETCH_SONGS_ERROR'
}

interface fetchSongsPendingType  {
    type: songsActionType.FETCH_SONGS_PENDING,
}

interface fetchSongsSuccessType  {
    type: songsActionType.FETCH_SONGS_SUCCESS,
    payload:any
 }
interface fetchSongsErrorType {
    type: songsActionType.FETCH_SONGS_ERROR,
}

export type SongActions = fetchSongsPendingType | fetchSongsSuccessType | fetchSongsErrorType;
