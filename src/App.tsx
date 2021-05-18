import React from 'react';
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

const App = () => {
  return (
    <>
      <div className='wrapper'>
        <main className='main'>
          <Header />
          <Sidebar />
          <div className='main__content content-main'>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={MainContent} />
                <Route exact path='/artists' component={Artists} />
                <Route exact path='/albums' component={Albums} />
                <Route exact path='/playlistItem' component={PlaylistItem} />
                <Route exact path='/songsList' component={SongsList} />
                <Route exact path='/recently' component={SongsList} />
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
