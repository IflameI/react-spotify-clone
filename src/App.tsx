import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';

import {
  Albums,
  AlbumsItem,
  Artists,
  Footer,
  Header,
  MainContent,
  PlaylistItem,
  Sidebar,
  SongsList,
  ArtistsItem,
} from './components';
import TableSearchWrapper from './components/TableSearch/TableSearchWrapper';
import { fetchAlbums } from './redux/actions/albums';
import { fetchArtistsSongs } from './redux/actions/artists';
import { fetchBrowse } from './redux/actions/browse';
import { fetchPlaylistsMenu } from './redux/actions/playlist';
import { fetchProfile } from './redux/actions/profile';
import { fetchSongs, playSongs, stopSong } from './redux/actions/songs';
import { setToken } from './redux/actions/token';

import { useAppDispatch, useAppSelector } from './redux/typeHooks/hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  let audio: any;

  const { token, user, view, isLoaded, songs, songsSearch, searchSongsPending } = useAppSelector(
    ({ token, profile, browse, songs, sound }) => {
      return {
        token: token.token,
        user: profile.user,
        view: browse.view,
        isLoaded: browse.isLoaded,
        songs: songs.songs.items,
        songPaused: songs.songPaused,
        songsSearch: songs.songsSearch.tracks.items,
        searchSongsPending: songs.searchSongsPending,
        soundVolume: sound.volume,
      };
    },
  );
  useEffect(() => {
    const hashParams: any = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href =
        'https://accounts.spotify.com/authorize?client_id=ebc667470c9944529a8e67a38b89722d&scope=streaming%20user-read-email%20user-read-private&response_type=token&redirect_uri=http://localhost:3000/';
    } else {
      dispatch(setToken(hashParams.access_token));
    }
  }, [token]);

  useEffect(() => {
    dispatch(fetchProfile(token));
    dispatch(fetchSongs(token));
    dispatch(fetchBrowse(token));
  }, [token]);

  const audioControl = React.useCallback(
    (track: any) => {
      if (audio === undefined) {
        dispatch(playSongs(track));
        audio = new Audio(track.preview_url);
        audio.play();
      } else {
        dispatch(stopSong());
        audio.pause();
        dispatch(playSongs(track));
        audio = new Audio(track.preview_url);
        audio.play();
      }
    },
    [audio],
  );

  const onClickPlaylist = React.useCallback(
    (albumId: string) => {
      dispatch(fetchPlaylistsMenu(albumId, token));
    },
    [user.id],
  );

  const onClickAlbum = React.useCallback(
    (albumId: string) => {
      dispatch(fetchAlbums(albumId, token));
    },
    [user.id],
  );

  const onClickArtists = React.useCallback(
    (artistId: string) => {
      dispatch(fetchArtistsSongs(artistId, token));
    },
    [user.id],
  );

  return (
    <>
      <div className='wrapper'>
        <main className='main'>
          <Header token={token} user={user} />
          <Sidebar />
          <div className='main__content content-main'>
            <div className='container'>
              <Switch>
                <Route exact path='/'>
                  <MainContent view={view} isLoaded={isLoaded} onClickPlaylist={onClickPlaylist} />
                </Route>
                <Route exact path='/songsList'>
                  <SongsList audioControl={audioControl} songs={songs} />
                </Route>
                <Route exact path='/albums'>
                  <Albums songs={songs} onClickAlbum={onClickAlbum} token={token} />
                </Route>
                <Route exact path='/artists'>
                  <Artists onClickArtists={onClickArtists} songs={songs} token={token} />
                </Route>
                <Route exact path='/playlistProfileItem'>
                  <PlaylistItem audioControl={audioControl} />
                </Route>
                <Route exact path='/albumProfileItem'>
                  <AlbumsItem audioControl={audioControl} />
                </Route>
                <Route exact path='/artistsItem'>
                  <ArtistsItem />
                </Route>
                <Route exact path='/searchSongs'>
                  <TableSearchWrapper
                    searchSongsPending={searchSongsPending}
                    songsSearch={songsSearch}
                    audioControl={audioControl}
                  />
                </Route>
              </Switch>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
