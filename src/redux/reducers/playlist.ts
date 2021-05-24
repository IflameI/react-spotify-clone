/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { playlistActionType, playlistActions } from '../../types/playlist';

const initialState = {
  fetchPlaylistPending: false,
  fetchPlaylistError: false,
  playlistMenu: [],
  playlists: [[]],
  fetchPlaylistSongsPending: false,
  songs: [],
  fetchPlaylistSongsError: false,
};
type initialStateType = typeof initialState;

const playlist = (state = initialState, action: playlistActions): initialStateType => {
  switch (action.type) {
    case playlistActionType.FETCH_PLAYLIST_MENU_PENDING:
      return {
        ...state,
        fetchPlaylistPending: true,
      };
    case playlistActionType.FETCH_PLAYLIST_MENU_SUCCESS:
      return {
        ...state,
        playlistMenu: action.payload,
        fetchPlaylistError: false,
        fetchPlaylistPending: false,
      };
    case playlistActionType.ADD_PLAYLIST_ITEM:
      return {
        ...state,
        playlists: [...state.playlists, action.payload],
      };
    case playlistActionType.FETCH_PLAYLIST_MENU_ERROR:
      return {
        ...state,
        fetchPlaylistError: true,
        fetchPlaylistPending: false,
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
        fetchPlaylistSongsError: false,
        fetchPlaylistSongsPending: false,
      };
    case playlistActionType.FETCH_PLAYLIST_SONGS_ERROR:
      return {
        ...state,
        fetchPlaylistSongsError: true,
        fetchPlaylistSongsPending: false,
      };
    default:
      return state;
  }
};

export default playlist;
