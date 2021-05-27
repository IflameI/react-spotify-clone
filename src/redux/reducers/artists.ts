/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { artistsActions, artistsActionType } from '../../types/artists';

const initialState = {
  artistIds: '',
  fetchArtistsPending: false,
  artistList: { artists: [] },
  songsArtist: { tracks: [] },
  fetchArtistSongsPending: false,
};
type initialStateType = typeof initialState;

const albums = (state = initialState, action: artistsActions): initialStateType => {
  switch (action.type) {
    case artistsActionType.SET_ARTIST_IDS:
      return {
        ...state,
        artistIds: action.payload,
      };
    case artistsActionType.FETCH_ARTISTS_PENDING:
      return {
        ...state,
        fetchArtistsPending: true,
      };
    case artistsActionType.FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        artistList: action.payload,
        fetchArtistsPending: false,
      };
    case artistsActionType.FETCH_ARTIST_SONGS_PENDING:
      return {
        ...state,
        fetchArtistSongsPending: true,
      };

    case artistsActionType.FETCH_ARTIST_SONGS_SUCCESS:
      return {
        ...state,
        songsArtist: action.payload,
        fetchArtistSongsPending: false,
      };
    default:
      return state;
  }
};

export default albums;
