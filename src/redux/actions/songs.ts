import { Dispatch } from 'redux';
import { SongActions, songsActionType } from '../../types/songs';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const fetchSongsPending = (): SongActions => {
  return {
    type: songsActionType.FETCH_SONGS_PENDING,
  };
};

export const fetchSongsSuccess = (payload:any): SongActions => {
  return {
    type: songsActionType.FETCH_SONGS_SUCCESS,
    payload
  };
};

export const fetchSongsError = (): SongActions => {
  return {
    type: songsActionType.FETCH_SONGS_ERROR,

  };
};

export const fetchSongs  = (accessToken: string) => (dispatch: Dispatch<SongActions>) => {
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
