import { Dispatch } from 'redux';
import { artistsActions, artistsActionType } from '../../types/artists';
import { SongActions, songsActionType } from '../../types/songs';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const setArtistIdAction = (payload: any): artistsActions => {
  return {
    type: artistsActionType.SET_ARTIST_IDS,
    payload,
  };
};

export const fetchArtistsPending = (): artistsActions => {
  return {
    type: artistsActionType.FETCH_ARTISTS_PENDING,
  };
};

export const fetchArtistsSuccess = (payload: any): artistsActions => {
  return {
    type: artistsActionType.FETCH_ARTISTS_SUCCESS,
    payload,
  };
};

export const fetchArtists =
  (artistIds: string, accessToken: string) => (dispatch: Dispatch<artistsActions>) => {
    const request = new Request(`https://api.spotify.com/v1/artists?ids=${artistIds}`, {
      headers: new Headers({
        Authorization: 'Bearer ' + accessToken,
      }),
    });
    dispatch(fetchArtistsPending());
    fetch(request)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(fetchArtistsSuccess(res));
      });
  };

export const fetchArtistSongsPending = (): SongActions => {
  return {
    type: songsActionType.FETCH_ARTIST_SONGS_PENDING,
  };
};

export const fetchArtistsSongsSuccess = (payload: any): SongActions => {
  return {
    type: songsActionType.FETCH_ARTIST_SONGS_SUCCESS,
    payload,
  };
};

export const fetchArtistsSongs =
  (artistId: string, accessToken: string) => (dispatch: Dispatch<SongActions>) => {
    const request = new Request(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
        }),
      },
    );
    dispatch(fetchArtistSongsPending());
    fetch(request)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(fetchArtistsSongsSuccess(res));
      });
  };

export const setArtistIds = (payload: any): artistsActions => {
  return {
    type: artistsActionType.SET_ARTIST_IDS,
    payload,
  };
};
