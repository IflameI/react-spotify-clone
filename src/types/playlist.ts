
export enum playlistActionType {
     FETCH_PLAYLIST_MENU_PENDING = 'FETCH_PLAYLIST_MENU_PENDING',
     FETCH_PLAYLIST_MENU_SUCCESS = 'FETCH_PLAYLIST_MENU_SUCCESS',
     FETCH_PLAYLIST_MENU_ERROR = 'FETCH_PLAYLIST_MENU_ERROR',
     ADD_PLAYLIST_ITEM = 'ADD_PLAYLIST_ITEM',
     FETCH_PLAYLIST_SONGS_PENDING = 'FETCH_PLAYLIST_SONGS_PENDING',
     FETCH_PLAYLIST_SONGS_SUCCESS = 'FETCH_PLAYLIST_SONGS_SUCCESS',
     FETCH_PLAYLIST_SONGS_ERROR = 'FETCH_PLAYLIST_SONGS_ERROR'
}

export interface fetchPlaylistMenuPendingType  {
   type: playlistActionType.FETCH_PLAYLIST_MENU_PENDING,
}

export interface fetchPlaylistMenuSuccessType  {
   type: playlistActionType.FETCH_PLAYLIST_MENU_SUCCESS,
   payload: any,
}
export interface fetchPlaylistMenuErrorType {
   type: playlistActionType.FETCH_PLAYLIST_MENU_ERROR,
}

export interface fetchPlaylistMenuErrorType {
    type: playlistActionType.FETCH_PLAYLIST_MENU_ERROR,
 }

 export interface addPlaylistItemType {
    type: playlistActionType.ADD_PLAYLIST_ITEM,
    payload: any,

 }
 export interface fetchPlaylistSongsPendingType {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_PENDING,

 }
 export interface fetchPlaylistSongsSuccessType {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_SUCCESS,
    songs: any,

 }
 export interface fetchPlaylistSongsErrorType {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_ERROR,

 }
export type playlistActions = fetchPlaylistMenuPendingType | fetchPlaylistMenuSuccessType 
| fetchPlaylistMenuErrorType | fetchPlaylistMenuErrorType | addPlaylistItemType | fetchPlaylistSongsPendingType 
| fetchPlaylistSongsSuccessType | fetchPlaylistSongsErrorType;
