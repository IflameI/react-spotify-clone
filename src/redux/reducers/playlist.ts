/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { playlistActionType, playlistActions } from '../../types/playlist';

const initialState = {
  playlistMenu: {
    tracks: {
      items: [],
      limit: 0,
    },
    owner: {
      display_name: '',
    },
    images:[{url:''}],
    name:'Spotify'
  },
  playlists: [[]],
  songs: [
    {
      items: [],
    },
  ],
  isLoaded: false,
  fetchPlaylistPending: false,
};
type initialStateType = typeof initialState;
const playlist = (state = initialState, action: playlistActions): initialStateType => {
  switch (action.type) {
    case playlistActionType.FETCH_PLAYLIST_MENU_SUCCESS:
      return {
        ...state,
        playlistMenu: action.payload,
        playlists: action.payload,
        fetchPlaylistPending: false,
      };
    case playlistActionType.ADD_PLAYLIST_ITEM:
      return {
        ...state,
        playlists: [...state.playlists, action.payload],
      };

    case playlistActionType.FETCH_PLAYLIST_MENU_PENDING:
      return {
        ...state,
        fetchPlaylistPending: true,
      };
    default:
      return state;
  }
};

export default playlist;
