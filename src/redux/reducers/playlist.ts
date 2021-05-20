/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

const initialState = {
  fetchPlaylistPending: false,
  fetchPlaylistError: false,
  playlistMenu: [],
  playlists: [[]],
};
type initialStateType = typeof initialState;

const playlist = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case 'FETCH_PLAYLIST_MENU_PENDING':
      return {
        ...state,
        fetchPlaylistPending: true,
      };
    case 'FETCH_PLAYLIST_MENU_SUCCESS"':
      return {
        ...state,
        playlistMenu: action.payload,
        fetchPlaylistError: false,
        fetchPlaylistPending: false,
      };
    case 'ADD_PLAYLIST_ITEM':
      return {
        ...state,
        playlists: [...state.playlists, action.playlist],
      };
    case 'FETCH_PLAYLIST_MENU_ERROR""':
      return {
        ...state,
        fetchPlaylistError: true,
        fetchPlaylistPending: false,
      };
    default:
      return state;
  }
};

export default playlist;
