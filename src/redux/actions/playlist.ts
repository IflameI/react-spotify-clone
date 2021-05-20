import { Dispatch } from 'redux';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const FETCH_PLAYLIST_MENU_PENDING = 'FETCH_PLAYLIST_MENU_PENDING';
const FETCH_PLAYLIST_MENU_SUCCESS = 'FETCH_PLAYLIST_MENU_SUCCESS';
const FETCH_PLAYLIST_MENU_ERROR = 'FETCH_PLAYLIST_MENU_ERROR';
const ADD_PLAYLIST_ITEM = 'ADD_PLAYLIST_ITEM';


export type actionsType = fetchPlaylistMenuPending | fetchPlaylistMenuSuccess | fetchPlaylistMenuError | addPlaylistItem ;

type fetchPlaylistMenuPending  = {
  type: typeof FETCH_PLAYLIST_MENU_PENDING,
};
type fetchPlaylistMenuSuccess = {
  type: typeof FETCH_PLAYLIST_MENU_SUCCESS,
  payload: any,
};
type fetchPlaylistMenuError = {
  type: typeof FETCH_PLAYLIST_MENU_ERROR,
};

type addPlaylistItem  = {
    type: typeof ADD_PLAYLIST_ITEM,
    payload: any,

};
export const fetchPlaylistMenuPending = (): fetchPlaylistMenuPending => {
  return {
    type: FETCH_PLAYLIST_MENU_PENDING,
  };
};

export const fetchPlaylistMenuSuccess = (payload:any): fetchPlaylistMenuSuccess => {
  return {
    type: FETCH_PLAYLIST_MENU_SUCCESS,
    payload
  };
};

export const fetchPlaylistMenuError = (): fetchPlaylistMenuError => {
  return {
    type: FETCH_PLAYLIST_MENU_ERROR,
  };
};


export const addPlaylistItem  = (payload:any): addPlaylistItem => {
    return {
      type: ADD_PLAYLIST_ITEM,
      payload
    };
  };


export const fetchPlaylistsMenu  = (userId:string,accessToken: string) => (dispatch: Dispatch<actionsType>) => {
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
