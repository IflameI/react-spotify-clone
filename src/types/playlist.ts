
export enum playlistActionType {
     FETCH_PLAYLIST_MENU_SUCCESS = 'FETCH_PLAYLIST_MENU_SUCCESS',
     ADD_PLAYLIST_ITEM = 'ADD_PLAYLIST_ITEM',
     FETCH_PLAYLIST_SONGS_SUCCESS = 'FETCH_PLAYLIST_SONGS_SUCCESS',
     SET_LOADED = 'SET_LOADED',
     FETCH_PLAYLIST_MENU_PENDING = 'FETCH_PLAYLIST_MENU_PENDING',
}
export interface fetchPlaylistMenuSuccessType  {
   type: playlistActionType.FETCH_PLAYLIST_MENU_SUCCESS,
   payload: any,
}

 export interface addPlaylistItemType {
    type: playlistActionType.ADD_PLAYLIST_ITEM,
    payload: any,

 }
 export interface fetchPlaylistSongsSuccessType {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_SUCCESS,
    songs: any,

 }

 export interface setLoadedType {
   type: playlistActionType.SET_LOADED,
   payload: boolean,
}

export interface fetchPlaylistMenuPendingType  {
   type: playlistActionType.FETCH_PLAYLIST_MENU_PENDING,
}


export type playlistActions = fetchPlaylistMenuPendingType | setLoadedType | fetchPlaylistMenuSuccessType | 
addPlaylistItemType  | fetchPlaylistSongsSuccessType;