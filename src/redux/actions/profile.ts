import { Dispatch } from 'redux';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const SET_LOADED = 'SET_LOADED';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export type actionsType = setLoadedActionType | fetchUserSuccessType | fetchUserErrorType;

type setLoadedActionType = {
  type: typeof SET_LOADED,
  payload: boolean,
};
type fetchUserSuccessType = {
  type: typeof FETCH_USER_SUCCESS,
  payload: any,
};
type fetchUserErrorType = {
  type: typeof FETCH_USER_ERROR,
};

export const fetchUserSuccess = (user: any): fetchUserSuccessType => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserError = (): fetchUserErrorType => {
  return {
    type: FETCH_USER_ERROR,
  };
};

export const setLoaded = (payload: boolean): setLoadedActionType => {
  return {
    type: SET_LOADED,
    payload,
  };
};

export const fetchProfile = (accessToken: string) => (dispatch: Dispatch<actionsType>) => {
  const request = new Request('https://api.spotify.com/v1/me', {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });

  fetch(request)
    .then((res) => {
      if (res.status === 401) {
        window.location.href = 'https://accounts.spotify.com/en/logout';
      }
      return res.json();
    })
    .then((res) => {
      dispatch(fetchUserSuccess(res));
    })
    .catch((err) => {
      dispatch(fetchUserError());
    });
};
