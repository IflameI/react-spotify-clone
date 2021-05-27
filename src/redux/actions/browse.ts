import { Dispatch } from 'redux';
import { browseActionType, browseActions } from '../../types/browse';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const setLoaded = (payload: boolean): browseActions => {
  return {
    type: browseActionType.SET_LOADED,
    payload,
  };
};

export const fetchBrowseSuccess = (browse: any): browseActions => {
  return {
    type: browseActionType.FETCH_BROWSE_SUCCESS,
    browse,
  };
};

export const fetchBrowseError = (): browseActions => {
  return {
    type: browseActionType.FETCH_BROWSE_ERROR,
  };
};

export const fetchBrowse = (accessToken: string) => (dispatch: Dispatch<browseActions>) => {
  const request = new Request('https://api.spotify.com/v1/browse/featured-playlists', {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(fetchBrowseSuccess(res.playlists));
    })
    .catch((err) => {
      dispatch(fetchBrowseError());
    });
};
