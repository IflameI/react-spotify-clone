import { Dispatch } from 'redux';
import { albumsActions, albumsActionType } from '../../types/albums';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const fetchAlbumsPending = (): albumsActions => {
  return {
    type: albumsActionType.FETCH_ALBUMS_PENDING,
  };
};

export const fetchAlbumsSuccess = (payload: any): albumsActions => {
  return {
    type: albumsActionType.FETCH_ALBUMS_SUCCESS,
    payload,
  };
};

export const fetchAlbums =
  (playlistId: string, accessToken: string) => (dispatch: Dispatch<albumsActions>) => {
    const request = new Request(`	https://api.spotify.com/v1/albums/${playlistId}`, {
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
      });
  };
