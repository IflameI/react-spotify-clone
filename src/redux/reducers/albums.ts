/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const initialState = {
  fetchAlbumsPending: false,
  fetchAlbumsError: false,
};
type initialStateType = typeof initialState;

const albums = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case 'FETCH_ALBUMS_PENDING':
      return {
        ...state,
        fetchAlbumsPending: true,
      };
    case 'FETCH_ALBUMS_SUCCESS"':
      return {
        ...state,
        fetchAlbumsError: false,
        fetchAlbumsPending: false,
      };
    case 'FETCH_ALBUMS_ERROR':
      return {
        ...state,
        fetchAlbumsError: true,
        fetchAlbumsPending: false,
      };
    default:
      return state;
  }
};

export default albums;
