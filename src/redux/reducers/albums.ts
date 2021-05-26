/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { albumsActions, albumsActionType } from '../../types/albums';

const initialState = {
  fetchAlbumsPending: false,
  fetchAlbumsError: false,
  albums: {
    tracks: {
      items: [{}],
      limit: 0,
    },
    images: [{ url: '' }],
    name: 'Spotify',
  },
};
type initialStateType = typeof initialState;

const albums = (state = initialState, action: albumsActions): initialStateType => {
  switch (action.type) {
    case albumsActionType.FETCH_ALBUMS_PENDING:
      return {
        ...state,
        fetchAlbumsPending: true,
      };
    case albumsActionType.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        fetchAlbumsPending: false,
      };
    default:
      return state;
  }
};

export default albums;
