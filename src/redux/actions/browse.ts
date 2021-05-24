import { Dispatch } from 'redux';
import { browseActionType, browseActions } from '../../types/browse';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const setLoaded = (payload: boolean): browseActions => {
  return {
    type: browseActionType.SET_LOADED,
    payload,
  };
};

export const fetchGenresSuccess = (categories: any): browseActions => {
  return {
    type: browseActionType.FETCH_GENRES_SUCCESS,
    categories,
  };
};

export const fetchGenresError = (): browseActions => {
  return {
    type: browseActionType.FETCH_GENRES_ERROR,
  };
};

export const fetchGenres = (accessToken: string) => (dispatch: Dispatch<browseActions>) => {
  const request = new Request('https://api.spotify.com/v1/browse/categories', {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(fetchGenresSuccess(res.categories));
    })
    .catch((err) => {
      dispatch(fetchGenresError());
    });
};

export const fetchNewReleasesSuccess = (newReleases: any): browseActions => {
  return {
    type: browseActionType.FETCH_NEW_RELEASES_SUCCESS,
    newReleases,
  };
};

export const fetchNewReleasesError = (): browseActions => {
  return {
    type: browseActionType.FETCH_NEW_RELEASES_ERROR,
  };
};

export const fetchNewReleases = (accessToken: string) => (dispatch: Dispatch<browseActions>) => {
  const request = new Request('https://api.spotify.com/v1/browse/new-releases', {
    headers: new Headers({
      Authorization: 'Bearer ' + accessToken,
    }),
  });

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(fetchNewReleasesSuccess(res.albums));
    })
    .catch((err) => {
      dispatch(fetchNewReleasesError());
    });
};

export const fetchFeaturedSuccess  = (featured: any): browseActions => {
  return {
    type: browseActionType.FETCH_FEATURED_SUCCESS,
    featured,
  };
};

export const fetchFeaturedError  = (): browseActions => {
  return {
    type: browseActionType.FETCH_FEATURED_ERROR,
  };
};

export const fetchFeatured  = (accessToken: string) => (dispatch: Dispatch<browseActions>) => {
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
      dispatch(fetchFeaturedSuccess(res.playlists));
    })
    .catch((err) => {
      dispatch(fetchFeaturedError());
    });
};
