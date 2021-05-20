import { Dispatch } from "redux";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const FETCH_ALBUMS_PENDING = 'FETCH_ALBUMS_PENDING';
const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
const FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR';



export type actionsType = fetchAlbumsPendingType | fetchAlbumsSuccessType | fetchAlbumsErrorType;

type fetchAlbumsPendingType = {
  type: typeof FETCH_ALBUMS_PENDING,
};
type fetchAlbumsSuccessType = {
  type: typeof FETCH_ALBUMS_SUCCESS,
  payload: any,
};
type fetchAlbumsErrorType = {
  type: typeof FETCH_ALBUMS_ERROR,
};


export const fetchAlbumsPending = ():fetchAlbumsPendingType => {
  return {
    type: FETCH_ALBUMS_PENDING,
  };
};

export const fetchAlbumsSuccess = (payload: any):fetchAlbumsSuccessType => {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    payload,
  };
};

export const fetchAlbumsError = ():fetchAlbumsErrorType => {
  return {
    type: FETCH_ALBUMS_ERROR,
  };
};

export const fetchAlbums = (accessToken: string) => (dispatch: Dispatch<actionsType>) => {
  const request = new Request('https://api.spotify.com/v1/me/albums', {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });

  dispatch(fetchAlbumsPending());

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(fetchAlbumsSuccess(res));
    })
    .catch((err) => {
      dispatch(fetchAlbumsError());
    });
};
