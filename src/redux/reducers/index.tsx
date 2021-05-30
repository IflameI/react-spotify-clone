import token from './token';
import profile from './profile';
import playlist from './playlist';
import albums from './albums';
import songs from './songs';
import browse from './browse';
import artists from './artists';
import sound from './sound';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  token,
  profile,
  playlist,
  albums,
  songs,
  browse,
  artists,
  sound,
});

export default rootReducer;
