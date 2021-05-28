/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { SongActions, songsActionType } from '../../types/songs';

const initialState = {
  fetchSongsPending: false,
  songs: {
    items: [],
  },
  songsSearch: {
    tracks: { items: [] },
  },
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  songPaused: true,
  fetchSongsError: false,
  searchSongsPending: false,
  searchSongsError: false,
  fetchPlaylistSongsPending: false,
  fetchPlaylistSongsError: false,
  fetchArtistSongsError: false,
  songDetails: null,
  fetchArtistSongsPending: false,
};
type initialStateType = typeof initialState;

const songs = (state = initialState, action: SongActions): initialStateType => {
  switch (action.type) {
    case songsActionType.FETCH_SONGS_PENDING:
      return {
        ...state,
        fetchSongsPending: true,
      };

    case songsActionType.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.payload,
        fetchSongsError: false,
        fetchSongsPending: false,
      };

    case songsActionType.FETCH_SONGS_ERROR:
      return {
        ...state,
        fetchSongsError: true,
        fetchSongsPending: false,
      };
    case songsActionType.SEARCH_SONGS_PENDING:
      return {
        ...state,
        searchSongsPending: true,
      };
    case songsActionType.SEARCH_SONGS_SUCCESS:
      return {
        ...state,
        songsSearch: action.payload,
        searchSongsError: false,
        searchSongsPending: false,
      };
    case songsActionType.SEARCH_SONGS_ERROR:
      return {
        ...state,
        searchSongsError: true,
        searchSongsPending: false,
      };

    // case 'PLAY_SONG':
    //   return {
    //     ...state,
    //     songPlaying: true,
    //     songDetails: action.song,
    //     songId: action.song.id,
    //     timeElapsed: 0,
    //     songPaused: false,
    //   };

    // case 'STOP_SONG':
    //   return {
    //     ...state,
    //     songPlaying: false,
    //     songDetails: null,
    //     timeElapsed: 0,
    //     songPaused: true,
    //   };

    // case 'PAUSE_SONG':
    //   return {
    //     ...state,
    //     songPaused: true,
    //   };

    // case 'RESUME_SONG':
    //   return {
    //     ...state,
    //     songPaused: false,
    //   };

    // case 'INCREASE_SONG_TIME':
    //   return {
    //     ...state,
    //     timeElapsed: action.payload,
    //   };

    default:
      return state;
  }
};

export default songs;
