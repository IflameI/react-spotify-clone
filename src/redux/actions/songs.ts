import { Dispatch } from 'redux';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const FETCH_SONGS_PENDING = 'FETCH_SONGS_PENDING';
const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
const FETCH_SONGS_ERROR = 'FETCH_SONGS_ERROR';

export type actionsType = fetchSongsPendingType | fetchSongsSuccessType | fetchSongsErrorType;

type fetchSongsPendingType = {
  type: typeof FETCH_SONGS_PENDING,
};
type fetchSongsSuccessType = {
  type: typeof FETCH_SONGS_SUCCESS,
  payload:any
};
type fetchSongsErrorType = {
  type: typeof FETCH_SONGS_ERROR,
};

export const fetchSongsPending = (): fetchSongsPendingType => {
  return {
    type: FETCH_SONGS_PENDING,
  };
};

export const fetchSongsSuccess = (payload:any): fetchSongsSuccessType => {
  return {
    type: FETCH_SONGS_SUCCESS,
    payload
  };
};

export const fetchSongsError = (): fetchSongsErrorType => {
  return {
    type: FETCH_SONGS_ERROR,

  };
};

export const fetchSongs  = (accessToken: string) => (dispatch: Dispatch<actionsType>) => {
  const request = new Request('https://api.spotify.com/v1/me/tracks?limit=50', {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });
  dispatch(fetchSongsPending());
  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(fetchSongsSuccess(res));
    })
    .catch((err) => {
      dispatch(fetchSongsError());
    });
};
