import { Dispatch } from 'redux';
import { playlistActions,playlistActionType } from '../../types/playlist';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


export const fetchPlaylistMenuPending = (): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_MENU_PENDING,
  };
};

export const fetchPlaylistMenuSuccess = (payload:any): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_MENU_SUCCESS,
    payload
  };
};

export const fetchPlaylistMenuError = (): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_MENU_ERROR,
  };
};


export const addPlaylistItem  = (payload:any): playlistActions => {
    return {
      type: playlistActionType.ADD_PLAYLIST_ITEM,
      payload
    };
  };


export const fetchPlaylistsMenu  = (userId:string,accessToken: string) => (dispatch: Dispatch<playlistActions>) => {
  const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });

  dispatch(fetchPlaylistMenuPending());

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(fetchPlaylistMenuSuccess(res));
    })
    .catch((err) => {
      dispatch(fetchPlaylistMenuError());
    });
};

export const fetchPlaylistSongsPending = (): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_PENDING,
  };
};

export const fetchPlaylistSongsSuccess = (songs:any): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_SUCCESS,
    songs
  };
};

export const fetchPlaylistSongsError = (): playlistActions => {
  return {
    type: playlistActionType.FETCH_PLAYLIST_SONGS_ERROR,
  };
};

export const fetchPlaylistSongs  = (userId:string,accessToken: string,playlistId:string) => (dispatch: Dispatch<playlistActions>) => {
  const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
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
      dispatch(fetchPlaylistSongsSuccess(res.items));
    })
    .catch((err) => {
      dispatch(fetchPlaylistSongsError());
    });
};