/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { playlistActionType, playlistActions } from '../../types/playlist';

const initialState = {
  playlistMenu: [],
  playlists: [[]],
  songs: [{
    items:[]
  }],
  isLoaded:false,
  fetchPlaylistSongsPending: false,
};
type StateType = {
  playlistMenu: any,
  playlists: any,
  songs: any,
  isLoaded:boolean,
  items?:any,
  fetchPlaylistSongsPending:boolean
};

const playlist = (state = initialState, action: playlistActions): StateType => {
  switch (action.type) {
    case playlistActionType.FETCH_PLAYLIST_MENU_SUCCESS:
      return {
        ...state,
        playlistMenu: action.payload,
        playlists:  action.payload,
        isLoaded:true,

      };
    case playlistActionType.ADD_PLAYLIST_ITEM:
      return {
        ...state,
        playlists: [...state.playlists, action.payload],
      };
      case playlistActionType.FETCH_PLAYLIST_SONGS_PENDING:
        return {
          ...state,
          fetchPlaylistSongsPending: true,

        };
    case playlistActionType.FETCH_PLAYLIST_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        fetchPlaylistSongsPending:false
      };
      case playlistActionType.SET_LOADED:
        return {
          ...state,
          isLoaded: action.payload,
        };
    default:
      return state;
  }
};

export default playlist;
