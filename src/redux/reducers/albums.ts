/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const initialState = {
  fetchAlbumsPending: false,
  fetchAlbumsError: false,
  albums:{
    tracks: {
      items: [{}],
      limit: 0,
    },
    images:[{url:''}],
    name:'Spotify'
  }
};
type initialStateType = typeof initialState;

const albums = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case 'FETCH_ALBUMS_PENDING':
      return {
        ...state,
        fetchAlbumsPending: true,
      };
    case 'FETCH_ALBUMS_SUCCESS':
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
