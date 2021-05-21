import { Dispatch } from 'redux';
import { profileActions,profileActionType } from '../../types/profile';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const fetchUserSuccess = (user: any):profileActions => {
  return {
    type: profileActionType.FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserError = ():profileActions => {
  return {
    type: profileActionType.FETCH_USER_ERROR,
  };
};

export const setLoaded = (payload: boolean):profileActions => {
  return {
    type: profileActionType.SET_LOADED,
    payload,
  };
};

export const fetchProfile = (accessToken: string) => (dispatch: Dispatch<profileActions>) => {
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
