import { Dispatch } from 'redux';
import { playlistActions,playlistActionType } from '../../types/playlist';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const fetchPlaylistMenuSuccess = (payload:any): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_MENU_SUCCESS,
    payload
  };
};

export const addPlaylistItem  = (payload:any): playlistActions => {
    return {
      type: playlistActionType.ADD_PLAYLIST_ITEM,
      payload
    };
  };


export const fetchPlaylistsMenu  = (playlistId:string,accessToken: string) => (dispatch: Dispatch<playlistActions>) => {
  const request = new Request(`	https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });
  dispatch({
    type: playlistActionType.SET_LOADED,
    payload: false,
  });

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(fetchPlaylistMenuSuccess(res));
    })
};

export const fetchPlaylistSongsSuccess = (songs:any): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_SUCCESS,
    songs
  };
};

export const fetchPlaylistSongsPending = (): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_PENDING,
  };
};

export const fetchPlaylistSongs  = (userId:string,accessToken: string,playlistId:string) => (dispatch: Dispatch<playlistActions>) => {
  const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks?offset=0&limit=25`, {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });
  dispatch(fetchPlaylistSongsPending());
  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(fetchPlaylistSongsSuccess(res));
    })
};