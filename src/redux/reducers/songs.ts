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
  songId: 0,
  songPaused: true,
  fetchSongsError: false,
  searchSongsPending: false,
  searchSongsError: false,
  fetchPlaylistSongsPending: false,
  fetchPlaylistSongsError: false,
  fetchArtistSongsError: false,
  songDetails: {
    name: 'Anonymous',
    artists: [{ name: 'Anonymous' }],
    album: { images: { 0: { url: '' } } },
    track: {
      name: 'Anonymous',
      artists: [{ name: 'Anonymous' }],
      album: { images: { 0: { url: '' } } },
    },
  },
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

    case songsActionType.PLAY_SONG:
      return {
        ...state,
        songPlaying: true,
        songDetails: action.payload,
        songId: action.payload.id,
        songPaused: false,
      };

    case songsActionType.STOP_SONG:
      return {
        ...state,
        songPlaying: false,
        songDetails: {
          name: 'Anonymous',
          artists: [{ name: 'Anonymous' }],
          album: { images: { 0: { url: '' } } },
          track: {
            name: 'Anonymous',
            artists: [{ name: 'Anonymous' }],
            album: { images: { 0: { url: '' } } },
          },
        },
        songPaused: true,
      };

    case songsActionType.PAUSE_SONG:
      return {
        ...state,
        songPaused: true,
      };

    case songsActionType.RESUME_SONG:
      return {
        ...state,
        songPaused: false,
      };

    default:
      return state;
  }
};

export default songs;
