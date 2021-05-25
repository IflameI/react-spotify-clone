import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';

import {
  Albums,
  Artists,
  Footer,
  Header,
  MainContent,
  PlaylistItem,
  Sidebar,
  SongsList,
} from './components';
import { fetchAlbums } from './redux/actions/albums';
import { fetchFeatured } from './redux/actions/browse';
import { fetchPlaylistsMenu } from './redux/actions/playlist';
import { fetchProfile } from './redux/actions/profile';
import { setToken } from './redux/actions/token';
import { useAppDispatch, useAppSelector } from './redux/typeHooks/hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const { token, user, view, isLoaded } = useAppSelector(({ token, profile, browse }) => {
    return {
      token: token.token,
      user: profile.user,
      view: browse.view,
      isLoaded: browse.isLoaded,
    };
  });
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
        'https://accounts.spotify.com/authorize?client_id=ebc667470c9944529a8e67a38b89722d&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/';
    } else {
      dispatch(setToken(hashParams.access_token));
    }
  }, [token]);

  useEffect(() => {
    dispatch(fetchProfile(token));
    // dispatch(fetchAlbums(token));
    dispatch(fetchFeatured(token));
  }, [token]);

  const onClickAlbum = React.useCallback(
    (albumId: string) => {
      dispatch(fetchPlaylistsMenu(albumId, token));
    },
    [user.id],
  );

  return (
    <>
      <div className='wrapper'>
        <main className='main'>
          <Header user={user} />
          <Sidebar />
          <div className='main__content content-main'>
            <div className='container'>
              <Switch>
                <Route exact path='/'>
                  <MainContent view={view} isLoaded={isLoaded} onClickAlbum={onClickAlbum} />
                </Route>
                <Route exact path='/songsList'>
                  <SongsList token={token} />
                </Route>
                <Route exact path='/albums' component={Albums} />
                <Route exact path='/artists' component={Artists} />
                <Route exact path='/playlistProfileItem'>
                  <PlaylistItem />
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
