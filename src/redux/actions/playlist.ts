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

  export const fetchPlaylistSongsPending = (): playlistActions => {
    return {
      type: playlistActionType.FETCH_PLAYLIST_MENU_PENDING,
    };
  };

export const fetchPlaylistsMenu  = (playlistId:string,accessToken: string) => (dispatch: Dispatch<playlistActions>) => {
  const request = new Request(`	https://api.spotify.com/v1/playlists/${playlistId}`, {
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
      dispatch(fetchPlaylistMenuSuccess(res));
    })
};
